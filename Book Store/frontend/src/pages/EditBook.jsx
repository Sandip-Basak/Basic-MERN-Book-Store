import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const EditBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState(2024);
  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5555/book/${id}`)
      .then((response) => {
        setTitle(response.data.title);
        setAuthor(response.data.author);
        setPublishYear(response.data.publishYear);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  const handleEditBook = () => {
    const data = {
      title: title,
      author: author,
      publishYear: publishYear,
    };
    axios
      .put(`http://localhost:5555/book/${id}`, data)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
        alert('Some Error occured !!!');
      })
  };

  return (
    <div className="container">
      <form>
        <div className="mb-3">
          <label className="form-label">Edit Title</label>
          <input value={title} onChange={(e) => {setTitle(e.target.value)}} type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Edit Author</label>
          <input value={author} onChange={(e) => {setAuthor(e.target.value)}} type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Edit Publish Year</label>
          <input value={publishYear} onChange={(e) => {setPublishYear(e.target.value)}} type="number" className="form-control" />
        </div>
        <button onClick={handleEditBook} className="btn btn-success">Save</button>
      </form>
    </div>
  )
}

export default EditBook