import React,{useEffect,useState} from 'react'
import {useParams} from "react-router-dom"
import {useFirebase} from "../context/Firebase"

function BookDetail() {
    const params=useParams();
    const firebase=useFirebase();
    const [data,setData]=useState(null);
    const [imageURL,setImageURL]=useState(null)

    useEffect(() => {
      firebase.getBookById(params.bookId)
      .then((value)=>setData(value.data()))
     
    }, [])

    useEffect(()=>
    {
        if(data)
        {
          const imageURL =data.imageURL;
          firebase.getImageURL(imageURL).then((url)=>setImageURL(url));
        }
        
    })

    if(data==null)
    return  <h1>Loading...</h1>
    
  return (
    // <div className="container mt-5">
    // <div>Book Details</div>
    // <h1>{data.name}</h1>
    // <h1>{data.price}</h1>
    // <h1>{data.isbn}</h1>
    // <h1>{data.userEmail}</h1>
    // <img src={imageURL} width="200px" style={{borderRadius: "10px"}}/>
    // <button className=' bg-blue-800 text-white px-5 py-2 br-4 rounded-md'>Buy Now</button>
    // </div>
    <div className='flex items-center justify-center flex-col'>
      <div className='mt-5 font-extrabold text-4xl text-regal-blue'>Book Details</div>
      <div class=" p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-5 flex">
      <img src={imageURL} width="200px" style={{borderRadius: "10px"}}/> 
      <div className=' ml-10 flex flex-col mr-52 gap-3'> 
      <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-regal-blue dark:text-white">{data.name}</h5>
      </a>
      <p class="mb-3 font-medium text-gray-700 dark:text-gray-400">Price: {data.price}</p>
      <p class="mb-3 font-medium text-gray-700 dark:text-gray-400">ISBN: {data.isbn}</p>
      <p class="mb-3 font-medium text-gray-700 dark:text-gray-400">Owner: {data.userEmail}</p>
      <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-eggplant rounded-lg hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Buy Now
          <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
      </a>
      </div>
    </div>
    </div>
  )
}

export default BookDetail