import React,{useEffect,useState} from 'react'
import {useFirebase} from "../context/Firebase"
import BookCard from '../components/Card'

function Orders() {

    const firebase=useFirebase();
    const [books,setBooks] =useState([]);
    console.log("LoggedIn value=",firebase.isLoggedin)
    useEffect(()=>{
        if(firebase.isLoggedin)
        {
        console.log("Email:",firebase.isLoggedin.currentUser.email)
        firebase
        .fetchmyBooks(firebase.isLoggedin.currentUser.email)
        ?.then((books)=>setBooks(books.docs))
        }
    },[firebase])
  
    console.log(books)

    if(!firebase.isLoggedin)
    return <h1>Please log in first</h1>
        
  return (
    <div  className="flex items-center justify-center flex-col px-8">
    <div className='mt-5  font-extrabold text-4xl text-regal-blue'>Orders</div>
    <div className='container mt-5 flex flex-wrap   flex-col sm:flex-row  gap-6 justify-center'>
        {books.map((book)=>(
          <BookCard
          link={`/book/orders/${book.id}`}
          key={book.id}
          id={book.id}
          {...book.data()}
          />            
          ))}
        
    </div>
    </div>
  )
}

export default Orders