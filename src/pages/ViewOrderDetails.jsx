import React,{useEffect, useState} from 'react'
import { useParams } from "react-router-dom"
import { useFirebase } from "../context/Firebase";

function ViewOrderDetails() {
    const params=useParams();
    const firebase= useFirebase();
    const [orders,setOrders]= useState([]);

    useEffect(() => {
      firebase.getOrders(params.bookId).
      then((orders) => setOrders(orders.docs))
    }, [])
    
    return (
      <div className='flex items-center justify-center flex-col px-8'>
        <div className='mt-5  font-extrabold text-4xl text-regal-blue  mb-5'>Orders</div>
        {orders.map((order) => {
          const data = order.data();
          console.log("data=",data)
          return (
          <div className=''
          key={order.id}
          >
          
          <a href="#" class="block max-w-xl p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Order By: {data.userEmail}</h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">Quantity: {data.qty}</p>
          </a>
          </div>
            // <div
            //   key={order.id}
            //   className="mt-5"
            //   style={{ border: "1px solid", padding: "10px" }}
            // >
            //   <h5>Order By: {data.displayName}</h5>
            //   <h6>Qty: {data.qty}</h6>
            //   <p>Email: {data.userEmail}</p>
            // </div>
          );
        })}
      </div>
    );
  };

export default ViewOrderDetails