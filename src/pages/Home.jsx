import React ,{useEffect,useState} from 'react'
import {useFirebase} from "../context/Firebase"
import BookCard from '../components/Card';

function Home() {
    const firebase=useFirebase();
    const [books, setBooks] = useState([]);

    useEffect(() => {
        firebase.listAllBooks().then((books)=> setBooks(books.docs))
        
    }, [])
    // console.log(books[0].data())
  return (
    <div  className="flex items-center justify-center flex-col px-8">
    <div className='mt-5  font-extrabold text-4xl text-regal-blue'>Available Books</div>
    <div className='container mt-5 flex flex-wrap   flex-col sm:flex-row  gap-6 justify-center'>
        {books.map((book)=>(
          <BookCard
          link={`/book/view/${book.id}`}
          key={book.id}
          id={book.id}
          {...book.data()}
          />            
          ))}
        
    </div>
    </div>
  )
}

export default Home