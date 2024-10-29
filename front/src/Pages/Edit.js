import BookForm from "../Components/BookForm";

//Edit Book: Contains a form for editing an existing book.
export default function Edit(){
    return(
        <BookForm isEdit ={true}/>
    )
}