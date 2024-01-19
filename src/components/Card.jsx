import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFirebase } from "../context/Firebase";

const BookCard = (props) => {
  const firebase = useFirebase();
  const navigate = useNavigate();

  const [url, setURL] = useState(null);

  useEffect(() => {
    firebase.getImageURL(props.imageURL).then((url) => setURL(url));
  }, []);

  console.log(props);

  return (
          <div class="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl sm:w-96 w-40">
            <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-72">
              <img
                src={url}
                alt="card-image" class="object-contain bg-slate-400 w-full h-full" />
            </div>
            <div class="p-6">
              <div class="flex items-center justify-between mb-2">
                <p class="block font-sans font-bold antialiased leading-relaxed text-regal-blue">
                {props.name}
                </p>
                <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                Rs.{props.price}
                </p>
              </div>
              <p class="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                ISBN: {props.isbn}
              </p>
            </div>
            <div class="p-6 pt-0">
              <button
              onClick={(e)=> navigate(props.link)}
                class="align-middle  bg-electric-blue text-gray-100 select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                type="button">
                View
              </button>
            </div>
          </div>
  );
};

export default BookCard;