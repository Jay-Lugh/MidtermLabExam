import axios from "axios";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'; 
import './Component.css';

// BookList: Displays a list of all books with options to view, edit, and delete each book.
export default function BookList() {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/books');
            setBooks(response.data.data); 
        } catch (err) {
            setError('Failed to fetch products');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    fetchProducts();
}, []);


  if (loading) {
    return <div className="loadingScreen">Loading...</div>;
  }

  if (error) {
    return <div className="errorScreen">{error}</div>;
  }

//View
const handleView = (book) => {
    navigate(`/view/${book.id}`, { state: book });
};

//Edit
const handleEdit = (book) => {
    navigate(`/edit/${book.id}`, { state: book });
};

//Delete
const handleDelete = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/books/${id}`);
      setBooks(books.filter(book => book.id !== id)); 
      console.log('Successfully Deleted!');
    } catch (error) {
      console.log('Failed to delete book :(');
    }
  
};



  return (
    <div className="bookTable">
      <Table striped>
        <thead>
          <tr>
            <th>Title</th>
            <th className="text-end">Action</th>
           
          </tr>
        </thead>

        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td><Button variant="link" onClick={() => handleView(book)}>{book.title}</Button></td>
              <td className="text-end"> 
              <Button variant="primary" onClick={() => handleEdit(book)} className="ms-2">
                  Edit
                </Button>
                <Button variant="danger" onClick={() => handleDelete(book.id)} className="ms-2">
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}