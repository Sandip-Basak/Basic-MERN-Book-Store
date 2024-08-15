import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


const ShowBook = () => {

  const [book, setBook] = useState({});

  // The id sent through the url
  const {id} = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5555/book/${id}`)
      .then((response) => {
        setBook(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);


  return (
    <div className="container my-3 w-75 text-center border border-2 border-dark">
      <h1 className="display-5">{book.title}</h1>
      <h1 className="display-5">Written by {book.author}</h1>
      <h1 className="display-6">Published on {book.publishYear}</h1>
    </div>
  )
}

export default ShowBook