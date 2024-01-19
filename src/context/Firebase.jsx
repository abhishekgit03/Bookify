import { createContext, useContext, useState,useEffect, Nav} from "react";
import { initializeApp } from "firebase/app";
import {getAuth,
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   setPersistence, 
   browserSessionPersistence } from "firebase/auth"
import {getFirestore,
   collection,
    addDoc, 
    getDocs,
    getDoc,
    doc,
    query,
    where} from "firebase/firestore"
import {getDownloadURL, getStorage, ref, uploadBytes} from "firebase/storage"


const FirebaseContext=createContext(null);

const firebaseConfig = {
    apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain:import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    messagingSenderId: import.meta.env.VITE_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_URL
  };

  export const app = initializeApp(firebaseConfig);
  const auth=getAuth(app)
  const firestore=getFirestore(app)
  const storage=getStorage(app)


  export const useFirebase =()=> useContext(FirebaseContext)

  export const FirebaseProvider =(props)=>
  {

    const signupUser=(email,password)=>
    {
      setPersistence(auth, browserSessionPersistence)
      
      .then(()=>{
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

    })
    }

    const signinUser=(email,password)=>
    {
      setPersistence(auth, browserSessionPersistence)
      .then(()=>{
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
      })
    }
   
      const handleCreateNewListing = async (name,price,isbn,cover)=>
      {
       
          const imageRef=ref(storage,`uploads/images/${Date.now()}-${cover.name}`)
          const uploadResult= await uploadBytes(imageRef,cover)
          console.log(uploadResult)
          console.log(auth.currentUser.email)
          return await addDoc(collection(firestore, "books"),{
            name,
            isbn,
            price,
            imageURL: uploadResult.ref.fullPath,
            userEmail: auth.currentUser.email
          })
      }

      const listAllBooks =()=>
      {
        return getDocs(collection(firestore,"books"))
      }

      const getImageURL= (path)=>
      {
        return getDownloadURL(ref(storage,path))
      }

      const getBookById= async (id)=>
      {
        const docRef =doc(firestore,"books",id);
        const result =await getDoc(docRef)
        console.log(result.data())
        return result;
      }

      const placeOrder= async (bookId, qty) =>
      {
        const collectionRef = collection(firestore, "books", bookId, "orders")
        const result= await addDoc(collectionRef,{
          userEmail:auth.currentUser.email,
          qty: Number(qty)
        })
        return result
      }

      const fetchmyBooks= async (useremail)=>
      {
        const collectionRef = collection(firestore,"books");
        const q =query(collectionRef, where("userEmail", "==", useremail))
        const result =await getDocs(q)
        return result
      }

      const getOrders = async(bookId) =>
      {
        const collectionRef = collection(firestore, "books", bookId, "orders");
        const result = await getDocs(collectionRef);
        return result;
      }

      const isLoggedin = auth
      
    
    return (
        <FirebaseContext.Provider value=
        {{signupUser,
          signinUser,
          handleCreateNewListing,
          auth,
          listAllBooks,
          getImageURL,
          getBookById,
          placeOrder,
          fetchmyBooks,
          getOrders,
          isLoggedin
        }}>
            {props.children}
        </FirebaseContext.Provider>
    )
  }