# CRA firebase authentication template

This is a template that sets up firebase authentication for you. 

Run the following command to create a new project with this Starter:

```
yarn create react-app [project-name] -e https://github.com/dewball345/react-authentication-cra
# or
npx create-next-app [project-name] -e https://github.com/dewball345/react-authentication-cra
```

Then, add your firebase credentials in `/src/firebase.js`

Replace the items in `firebaseConfig`:

```
var firebaseConfig = {
    apiKey: "enter-api-key",
    authDomain: "enter-auth-domain",
    projectId: "enter-project-id",
    storageBucket: "enter-storage-bucket",
    messagingSenderId: "enter-messenger-id",
    appId: "enter-app-id"
};
```

With your own details.

This starter gets you up and running if you want to make an SPA that requires Firebase Authentication. It also comes with Realtime DB support as well, though you can easily change it to Cloud Firestore by doing:

```
import 'firebase/firebase-firestore';
```

and replacing

```
export const db = firebase.database();
```

with

```
export const db = firebase.firestore();
```

The template contains the bare minimum; This is to make sure you have the freedom to create an app the way you want it to be. 
