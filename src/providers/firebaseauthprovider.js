import {auth} from '../firebase.js';
import {useState, useEffect, createContext} from 'react';


export const FBContext = createContext();

export function FirebaseAuthProvider({children}){
    const [currentUser, setCurrentUser] = useState();
    const [isloading, setLoading] = useState(true);

    function login(email, password){
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logout(){
        return auth.signOut()
    }

    async function register(name, email, password){
        let res = await auth.createUserWithEmailAndPassword(email, password)
        this.auth.currentUser.updateProfile({
            displayName: name
        })

        return res;
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
            setLoading(false)
        })
    });

    const value = {
        currentUser,
        isloading,
        login,
        logout,
        register
    }

    return (
        <FBContext.Provider value={value}>
            {children}
        </FBContext.Provider>
    )
}