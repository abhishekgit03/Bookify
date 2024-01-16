import { createContext, useContext, useState,useEffect} from "react";
import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth"

const FirebaseContext=createContext(null);

const firebaseConfig = {
    apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain:import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL
  };

  export const app = initializeApp(firebaseConfig);
  const auth=getAuth(app)
  export const useFirebase =()=> useContext(FirebaseContext)

  export const FirebaseProvider =(props)=>
  {
    const [user,setUser] = useState(null)

    useEffect(()=>{
      onAuthStateChanged(auth,(user)=>{
          if(user)
            setUser(user);
          else
            setUser(null);
      })
    },[])

    const signupUser=(email,password)=>
    {
      return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential)=>
      {
        const user =userCredential.user
        console.log("Registration successful:",user)
        alert("Registration Successful")
      })
      .catch((err)=>
      {
        alert("Error:",err.message)
        console.log("Registration not successful:",err)
      })
    }

    const signinUser=(email,password)=>
    {
      return signInWithEmailAndPassword(auth,email,password)
      .then((userCredential)=>
      {
        const user =userCredential.user
        console.log("Login successful:",user)
        alert("Login Successful")
      })
      .catch((err)=>
      {
        alert("Login Failed!")
        console.log("Login not successful:",err)
      })
    }

      const isLoggedIn =user? true: false
    return (
        <FirebaseContext.Provider value=
        {{signupUser,
          signinUser
        }}>
            {props.children}
        </FirebaseContext.Provider>
    )
  }