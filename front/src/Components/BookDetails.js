import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from "axios";

// BookDetails: Displays detailed information for a selected book.
export default function BookDetails() {
    const navigate = useNavigate(); 
    const location = useLocation();
    const bookChosen = location.state;

    const [book, setBook] = useState({
        title: "",
        author: "",
        published_year: "",
        genre: "",
        description: ""
    });

    useEffect(() => {
        const fetchBookDetails = async () => {
            console.log('Is chosen', bookChosen.id);
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/books/${bookChosen.id}`);
                setBook(response.data.data); 

            } catch (error) {
                console.error("Error fetching book details:", error);
            }
        };

        fetchBookDetails();
    }, [bookChosen.id]); 

    // Back to Home
    const returnHome = () => {
        navigate('/');
    };

    return (
        <>
            <div className="detailContainer">
                <div className="title">
                    <h1>Book Details</h1>
                    <Button onClick={returnHome} variant="secondary" className="backButton">Back to Home</Button>
                </div>
                
                <div className="bookDetails">
                    <p><strong>Title:</strong> {book.title}</p>
                    <p><strong>Author:</strong> {book.author}</p>
                    <p><strong>Published Year:</strong> {book.published_year}</p>
                    <p><strong>Genre:</strong> {book.genre}</p>
                    <p><strong>Description:</strong> {book.description}</p>
                </div>
            </div>
        </>
    );
}
