import Button from 'react-bootstrap/Button';
import { useLocation, useNavigate } from 'react-router-dom';

//BookDetails: Displays detailed information for a selected book.
export default function BookDetails() {
    const navigate = useNavigate(); 
    const location = useLocation();
    const book = location.state;

    const bookChosen = {
        title: book.title,
        author: book.author,
        price: book.price,
        published_year: book.published_year,
        genre: book.genre,
        description: book.description
    };
  
    //Back to Home
    const returnHome = () => {
        navigate('/');
    }

    return (
        <>
            <div className="detailContainer">
    <div className="title">
        <h1>Book Details</h1>
        <Button onClick={returnHome} variant="secondary" className="backButton">Back to Home</Button>
    </div>
    
    <div className="bookDetails">
        <p><strong>Title:</strong> {bookChosen.title}</p>
        <p><strong>Author:</strong> {bookChosen.author}</p>
        <p><strong>Published Year:</strong> {bookChosen.published_year}</p>
        <p><strong>Genre:</strong> {bookChosen.genre}</p>
        <p><strong>Description:</strong> {bookChosen.description}</p>
    </div>
</div>

        </>
    );
}