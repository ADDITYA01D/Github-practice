import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getBookList } from "../../services/bookService";
import { toast } from "react-toastify";
import { deleteBook } from "../../services/adminService";
import { useSelector } from "react-redux";

function AdminShowBooks() {

    const navigate = useNavigate();
    const token = useSelector((state) => state.auth.token);
    const [books, setBooks] = useState([]);

    useEffect(()=>{
        selectBooks();
    },[])

    const selectBooks = async () =>
    {
        const response = await getBookList()
        if(response['status']===200){
            setBooks(response.data)
            console.log("here")
        }
        else{
            toast.error("UNABLE TO LOAD DATA");
        }
    }
    
    
    
    const details = (book) =>
    {
        const dataObj = {
            key:book.id,
            // category:book.category,
            description:book['description'],
            discountedPrice:book['discountedPrice'],
            // imagePath:book['imagePath'],
            isbn:book['isbn'],
            title:book['title'],
            price:book['price'],
            authorName:book['authorName'],
            quantity:book['quantity']
        }
        navigate('/updateBookForm',{state:{dataObj:dataObj}});
    }
    
    const deleteBookById = async(bookId) =>
    {
        const response = await deleteBook(bookId, token)
        if(response['status']===200){
            console.log("inside deleteBookById()")
            toast.success("Book Deleted!!")
            selectBooks();
        }
        else{
            toast.error("UNABLE TO DELETE BOOK");
        }
    }

    return ( 
        <>
            <table className="table table-striped" style={{marginTop:"100px"}}>
                <thead>
                <tr>
                    <th>Book Id</th>
                    <th>ISBN</th>
                    <th>Book Title</th>
                    <th colSpan={2} style={{textAlign:"center"}}>Actions</th>
                </tr>
                </thead>

                <tbody>
                {
                    books.map((book)=>{
                        return(
                            <tr>
                                <td>{book.id}</td>
                                <td>{book.isbn}</td>
                                <td>{book.title}</td>
                                <td>
                                    <button className="btn btn-success" onClick={()=>{details(book)}}>Update</button>
                                </td>
                                <td>
                                    <button className="btn btn-danger" onClick={()=>{deleteBookById(book.id)}}>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>

            </table>
        </>
     );
}

export default AdminShowBooks;