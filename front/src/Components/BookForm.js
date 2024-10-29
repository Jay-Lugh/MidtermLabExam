import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useLocation, useNavigate } from 'react-router-dom';
import axios from "axios";

// BookForm: A form component to create a new book and update an existing book.
export default function BookForm({ isEdit }) {
    const navigate = useNavigate();
    const location = useLocation();
    const bookChosen = location.state;

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [book, setBook] = useState({
        title: "",
        author: "",
        published_year: "",
        genre: "",
        description: ""
    });
    const [validated, setValidated] = useState(false);

    useEffect(() => {
        if (isEdit && bookChosen) {
            setBook(bookChosen);
        }
        setLoading(false);
    }, [isEdit, bookChosen]);

    // Handles any changes made in the input
    const handleChange = (e) => {
        const { name, value } = e.target;
        setBook({ ...book, [name]: value });
    };

    // Return to Home
    const returnHome = () => {
        navigate('/');
    };

    // Submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.currentTarget;

        // Validate form
        if (form.checkValidity() === false) {
            e.stopPropagation();
        } else {
            try {
                if (isEdit) {
                    await axios.put(`http://127.0.0.1:8000/api/books/${book.id}`, book);
                } else {
                    await axios.post('http://127.0.0.1:8000/api/books', book);
                }
                navigate('/');
            } catch (error) {
                setError('Failed to save book');
            }
        }
        setValidated(true);
    };

    if (loading) {
        return <div className="loadingScreen">Loading...</div>;
    }

    if (error) {
        return <div className="errorScreen">{error}</div>;
    }

    return (
        <>
       
            <div className="title">
            <h1>{isEdit ? 'Update Book' : 'Add Book'}</h1>
            <Button onClick={returnHome}>Cancel</Button>
            </div>
            <div className="form">
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <div className="form-grid">
            <Form.Group controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control
                    type="text"
                    name="title"
                    placeholder="Book Title..."
                    value={book.title}
                    onChange={handleChange}
                    required
                />
            </Form.Group>
            
            <Form.Group controlId="author">
                <Form.Label>Author</Form.Label>
                <Form.Control
                    type="text"
                    name="author"
                    placeholder="Book Author..."
                    value={book.author}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="published_year">
                <Form.Label>Year Published</Form.Label>
                <Form.Control
                    type="number"
                    name="published_year"
                    placeholder="Book Published Year..."
                    value={book.published_year}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="genre">
                <Form.Label>Genre</Form.Label>
                <Form.Control
                    type="text"
                    name="genre"
                    placeholder="Book Genre..."
                    value={book.genre}
                    onChange={handleChange}
                    required
                />
            </Form.Group>
        </div>

        <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
                as="textarea"
                name="description"
                placeholder="Book Description..."
                value={book.description}
                onChange={handleChange}
                required
            />
        </Form.Group>

        <Button variant="primary" type="submit">
            {isEdit ? 'Update' : 'Add'}
        </Button>
    </Form>
</div>

        </>
    );
}
