import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getBookList } from "../../services/bookService";
import { toast } from "react-toastify";
import { addBook, deleteBook } from "../../services/adminService";
import { useSelector } from "react-redux";

function AdminAddBook() {


    const token = useSelector((state) => state.auth.token);
    const[book,setBook]=useState(
        {
            isbn:0,    // the keys here should match with the DTO in the backend 
            title:'',
            description:'',
            price:0,
            discountedPrice:0,
            quantity:0,
            category:'BIOGRAPHY',
            authorId:0,
            imagePath:''


            });

            const handleChange=(args)=>{
                    var copyBook={...book};
                    copyBook[args.target.name]=args.target.value;
                    setBook(copyBook);
            }

    const saveBook=async ()=>{

       
        const response=await addBook(book,token)
     
        if(response['status']===200){
           
            console.log("here")
            toast.success("ADDED SUCCESSFULLY");
        }
        else{
            toast.error("UNABLE TO LOAD DATA");
        }
    }


    return (
        <>
            <div className="container" style={{marginTop:"100px"}}>
            <form onSubmit={saveBook}> 
                <div class="mb-3">
                    <label class="form-label">ISBN</label>
                    <input type="number" class="form-control" name="isbn" onChange={handleChange}/>
                </div>

                <div class="mb-3">
                    <label class="form-label">Book Title</label>
                    <input type="text" class="form-control" name="title" onChange={handleChange}/>
                </div>

                <div class="mb-3">
                    <label class="form-label">Book Category</label>
                    <input type="text" class="form-control" name="category" onChange={handleChange}/>
                </div>

                <div class="mb-3">
                    <label class="form-label">Price</label>
                    <input type="number" class="form-control" name="price" onChange={handleChange}/>
                </div>

                <div class="mb-3">
                    <label class="form-label">Discounted Price</label>
                    <input type="number" class="form-control" name="discountedPrice" onChange={handleChange}/>
                </div>
                
                <div class="mb-3">
                    <label class="form-label">Quantity</label>
                    <input type="number" class="form-control" name="quantity" onChange={handleChange}/>
                </div>

                <div class="mb-3">
                    <label class="form-label">Author Id</label>
                    <input type="number" class="form-control" name="authorId" onChange={handleChange}/>
                </div>
                
                <div class="mb-3">
                    <label class="form-label">Image Path</label>
                    <input type="text" class="form-control" name="imagePath" onChange={handleChange}/>
                </div>

                <div class="mb-3">
                    <label class="form-label">Description</label>
                    <textarea class="form-control" name="description" onChange={handleChange}/>
                </div>
               
                
                
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            </div>
        </>
    );
}

export default AdminAddBook;