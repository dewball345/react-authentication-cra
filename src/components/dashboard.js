import {FBContext} from '../providers/firebaseauthprovider.js';
import {DBContext} from '../providers/firebasedbprovider.js';
import {useContext, useState} from 'react';

export function Dashboard(){
    const [rating, setRating] = useState();

    let context = useContext(FBContext);
    let dbcontext = useContext(DBContext);

    function add(){
        console.log(dbcontext)
        dbcontext.writeUserData(context.currentUser.uid, '/ratings', {
            rating: "10/10"
        })
    }

    async function get(){
        let data = await dbcontext.getUserData(context.currentUser.uid, '/ratings');
        setRating(data['rating'])
    }

    return(
        <div>
            <div>Hello {context.currentUser.displayName} </div>
            <button onClick={add}>Add</button>
            <button onClick={get}>get</button>
            <h5>{rating}</h5>
        </div>
    )
}