import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getBookList } from '../services/bookService';
import { useNavigate ,Link } from 'react-router-dom';
import Book from './bookDetails';
import { useSelector } from 'react-redux';


function CarouselBooks() {


        const [books,setBooks] = useState([]);
        const [offer,setOffer] = useState([]);

    
        const navigate = useNavigate();

        const name = useSelector((state) => state.auth.name);

        useEffect(()=>{
                selectBooks();
        },[])

        useEffect(() => {
                selectOffer(books);
        },[books])

 
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

        const selectOffer = (books) =>
        {
                var arr = [];
                var j = 0;
                console.log(books)
                for(var i = 0; i < books.length; i++){
                        if(books[i]['category'] === 'PATRIOTIC'){
                                arr[j] = books[i];
                                j++;
                        }
                }
                setOffer(arr);
        }

 const details = (book) => {

const dataObj = {
    key:book.id,
    category:book.category,
    description:book['description'],
    discountedPrice:book['discountedPrice'],
    imagePath:book['imagePath'],
    isbn:book['isbn'],
    title:book['title'],
    price:book['price'],
    authorName:book['authorName']
               }
               navigate('/bookDetails',{state:{dataObj:dataObj}});
     }

     const author = (book) => {

        const dataObj = {
            key:book.id,
            authorName:book['authorName']
                       }
                       navigate('/authorDetails',{state:{dataObj:dataObj}});
             }


        return (<>
        <div><h1>{name}</h1></div>
     <div className='container'> 
        <div className='row'style={{ marginTop: 50 }}>
                {
                    offer.map((offers)=>{
                        return(
                          
                            <div className="col-sm-4" key={offers['id']}>
                            <div className="card" style={{ width: "20rem", border : '2px solid red'}}>
                             <img src={offers['imagePath']} style={{height:"20rem"}} alt="img" className="img-thumbnail"/>
                           
                                 <div className="card-body">
                                     <h5 className="card-title">{offers['title']}</h5>
                                     <ul className="list-group list-group-flush">
                                    <li className="list-group-item">ISBN: {offers['isbn']}</li>
                                         <li className="list-group-item">Author : <button className="btn btn-link" onClick={()=>{author(offers)}}>{offers.authorName.name}</button></li>
                                         <li className="list-group-item">Price: ₹ {offers['discountedPrice']} <s> {offers['price']}</s></li>
                                       <li className="list-group-item">
                                        <button style={{backgroundColor : 'orangered', border : 'none'}} className="btn btn-info" onClick={()=>{details(offers)}}>Quick View</button>
                                            
                                            </li>
                                     </ul>
                                 </div>
                             </div>
        
        
                             <br></br>
                        </div>
                        
                        );       
                    })
                }
            
        </div>
    </div> 
        </>)
}

export default CarouselBooks;