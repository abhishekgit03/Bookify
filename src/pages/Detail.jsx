import React,{useEffect,useState} from 'react'
import {useParams} from "react-router-dom"
import {useFirebase} from "../context/Firebase"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function BookDetail() {
    const params=useParams();
    const firebase=useFirebase();
    const [data,setData]=useState(null);
    const [imageURL,setImageURL]=useState(null)
    const [qty,setQty]=useState(1)


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

    const notify = () => toast("Order successfully placed");

    const placeOrder = async ()=>
    {
      const result= await firebase.placeOrder(params.bookId,qty)
      console.log("Order Placed",result)
    }

    if(data==null)
    return (
    <div role="status" className='mt-10 flex items-center justify-center flex-col'>
      <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
      </svg>
      <span class="sr-only">Loading...</span>
    </div>
)
    
  return (
    <div className='flex items-center justify-center flex-col'>
      
      <a href="/" className='mr-auto ml-10 mt-6 font-bold text-regal-blue text-lg underline hover:underline-offset-2'>Back</a>
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
      <div>
          <label for="qty" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quantity: </label>
          <input
            value={qty}
            onChange={e => setQty(e.target.value)} 
            type="number" name="qty" id="qty" placeholder="qty" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
      </div>
      <button 
       class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-eggplant rounded-lg hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
       onClick={(e)=>
        {
          e.preventDefault()
          placeOrder()
          notify()
        }
       }>
          Buy Now
          <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
      </button>
      <ToastContainer />
      </div>
    </div>
    </div>
  )
}

export default BookDetail