import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { update } from "../../services/adminService";
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';


function UpdateBook() {

    
    const location = useLocation();
    const book = location.state.dataObj;
    const token = useSelector((state) => state.auth.token);

    const [books, setBooks] = useState({
      // isbn: 0,
      // title: '',
      // // authorName: '',
      // price: 0,
      // discountedPrice: 0,
      // quantity: 0,
      // description: ''
        isbn: book.isbn,
        title: book.title,
        // authorName: '',
        price: book.price,
        discountedPrice: book.discountedPrice,
        quantity: book.quantity,
        description: book.description,
    });

    // useEffect(() => {
    //   setBooks({
    //     isbn: book.isbn,
    //     title: book.title,
    //     // authorName: '',
    //     price: book.price,
    //     discountedPrice: book.discountedPrice,
    //     quantity: book.quantity,
    //     description: book.description,
    //   })
    // },[])

    useEffect(() => {
      console.log(books);
    },[books])

    const handleChange = (args) => {
      var copyBook = {...books};
      copyBook[args.target.name] = args.target.value;
      console.log(copyBook);
      setBooks(copyBook);
  }

  const updateBook = async () =>
    {
        // to be changed
        const response = await update(book.key, books ,token)
        if(response['status']===200){
            // setBooks(response)
            console.log("here")
            toast.success("Book Updated!!")
        }
        else{
            toast.error("UNABLE TO UPDATE BOOK");
        }
    }

  return (
    <>
      <div className='row' style={{marginTop:"100px"}}>
        <div className='col'></div>
        <div className='col'>
          <div className='form'>
            <div className='mb-3'>
              <label>ISBN</label>
              <input type='number' className='form-control' name = "isbn" value={books.isbn}
                onChange={handleChange}
              />
            </div>

            <div className='mb-3'>
              <label htmlFor=''>Title</label>
              <input type='text' className='form-control' name = 'title' value = {books.title}
                onChange={handleChange}
              />
            </div>

            {/* <div className='mb-3'>
              <label htmlFor=''>Author</label>
              <input type='text' className='form-control' name = 'authorName' value = {book.authorName.name}
                onChange={(e) => {
                  handleChange(e)
                }}
              />
            </div> */}

            <div className='mb-3'>
              <label htmlFor=''>Price</label>
              <input type='number' className='form-control' name = 'price' value = {books.price}
                onChange={handleChange}
              />
            </div>

            <div className='mb-3'>
              <label htmlFor=''>Discounted Price</label>
              <input type='number' className='form-control' name = 'discountedPrice' value = {books.discountedPrice}
                onChange={handleChange}
              />
            </div>

            <div className='mb-3'>
              <label htmlFor=''>Quantity</label>
              <input type='number' className='form-control' name = 'quantity' value = {books.quantity}
                onChange={handleChange}
              />
            </div>

            <div className='mb-3'>
              <label htmlFor=''>Description</label>
              <textarea className='form-control' name = 'description' value = {books.description}
                onChange={handleChange}
              />
            </div>

            <div className='mb-3'>
              <button onClick={updateBook} className='btn btn-success'>Update</button>
            </div>
          </div>
        </div>
        <div className='col'></div>
      </div>

        </>
     );
}

export default UpdateBook;