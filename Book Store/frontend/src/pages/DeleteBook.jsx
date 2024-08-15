import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const DeleteBook = () => {
  const navigate=useNavigate();
  const {id} = useParams();
  const [book, setBook] = useState({});

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

  const handleDeleteBook = () => {
    axios
      .delete(`http://localhost:5555/book/${id}`)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
        alert('Some Error occured !!!');
      })
  };

  return (
    <div className='container text-center border border-2 border-dark w-75 my-3'>
      <h1 className='display-4 my-2'>{book.title}</h1>
      <button onClick={handleDeleteBook} className='btn btn-danger my-2'>Delete</button>
    </div>
  )
}

export default DeleteBook