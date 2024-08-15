import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateBooks = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState(2024);
  const navigate = useNavigate();

  const handleSaveBook = () => {
    const data = {
      title: title,
      author: author,
      publishYear: publishYear,
    };
    axios
      .post('http://localhost:5555/book', data)
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
          <label className="form-label">Enter Title</label>
          <input value={title} onChange={(e) => {setTitle(e.target.value)}} type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Enter Author</label>
          <input value={author} onChange={(e) => {setAuthor(e.target.value)}} type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Enter Publish Year</label>
          <input value={publishYear} onChange={(e) => {setPublishYear(e.target.value)}} type="number" className="form-control" />
        </div>
        <button onClick={handleSaveBook} className="btn btn-success">Add Book</button>
      </form>
    </div>
  )
}

export default CreateBooks