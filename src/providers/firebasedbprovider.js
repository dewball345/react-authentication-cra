import {db} from '../firebase.js';
import {useState, useEffect, createContext} from 'react';


export const DBContext = createContext();

export function FirebaseDBProvider({children}){

    function writeUserData(userId, dir, data) {
        db.ref(dir + "/" + userId).set(data);
    }

    async function getUserData(userId, dir){
        let data = await db.ref(dir + "/" + userId).get()
        return data.val();
    }

    const value = {
        writeUserData,
        getUserData
    }

    return (
        <DBContext.Provider value={value}>
            {children}
        </DBContext.Provider>
    )
}