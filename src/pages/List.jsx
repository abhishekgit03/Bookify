import React,{useState,useEffect} from 'react'
import { useNavigate } from "react-router-dom"
import { useFirebase } from '../context/Firebase'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ListingPage() {
    const firebase=useFirebase()
    const [bookname,setBookname] =useState('')
    const [isbn,setIsbn] =useState('')
    const [price,setPrice]=useState('');
    const [coverpic,setCoverpic]=useState('');

    const notify = () => toast("Book successfully added");

   
  return (
    <div>
    <section class="bg-gray-50 dark:bg-gray-900 ">
    <div class="flex flex-col items-center justify-center px-6 py-5 mx-auto  lg:py-0">
    <div className='font-extrabold text-4xl text-regal-blue mb-6'>List Books for sale</div>
      <div class="w-full bg-regal rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <form class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="bookname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Book Name</label>
                      <input type="text"
                       value={bookname}
                       onChange={e => setBookname(e.target.value)} 
                      name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Book Name" required=""/>
                  </div>
                  <div>
                      <label for="isbn" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ISBN</label>
                      <input
                       value={isbn}
                       onChange={e => setIsbn(e.target.value)} 
                        type="text" name="isbn" id="isbn" placeholder="ISBN" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div>
                      <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price(₹)</label>
                      <input
                       value={price}
                       onChange={e => setPrice(e.target.value)} 
                        type="number" name="price" id="price" placeholder="Price" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div>
                      <label for="coverpic" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Upload Cover Picture</label>
                      <input
                       onChange={e => setCoverpic(e.target.files[0])} 
                        type="file" name="coverpic" id="coverpic" placeholder="Upload cover picture" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <button type="submit"
                  onClick={ async (e)=>
                    {
                      e.preventDefault()
                      await firebase.handleCreateNewListing(bookname,price,isbn,coverpic)
                      console.log("Executed")
                      notify()
                    }}
                    class="w-full text-white bg-electric-blue bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                    Submit</button>
                    <ToastContainer />
                 
              </form>
          </div>
      </div>
  </div>
</section>
</div>
  )
}

export default ListingPage
