import React,{useEffect,useState} from 'react'
import {useParams} from "react-router-dom"
import {useFirebase} from "../context/Firebase"

function BookDetail() {
    const params=useParams();
    const firebase=useFirebase();
    const [data,setData]=useState(null);

    useEffect(() => {
      firebase.getBookById(params.bookId)
      .then((value)=>setData(value.data()))
     
    }, [])

    if(data==null)
    return  <h1>Loading...</h1>
    
  return (
    <div>Book Details</div>
  )
}

export default BookDetail