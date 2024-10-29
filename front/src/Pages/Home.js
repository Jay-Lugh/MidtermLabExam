import { Button } from "react-bootstrap";
import BookList from "../Components/BookList"
import {useNavigate } from 'react-router-dom';

//Home: Lists all books and allows the user to select a book to view details.
export default function Home(){
    const navigate = useNavigate(); 
    const handleAdd = () => {
        navigate(`/add`); 
    };
    return(
        <>
        <div className="title">
        <h1>Home</h1>
        <Button onClick={handleAdd}>Add</Button>
        </div>
         <BookList/>
        </>
       
    );
} 