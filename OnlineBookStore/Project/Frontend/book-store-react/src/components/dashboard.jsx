import { Link, useNavigate } from 'react-router-dom';
import '../styles/style.css';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { getBookList } from '../services/bookService';

function Dashboard()
{
        const [books,setBooks] = useState([]);
        const [science,setScience] = useState([]);
        
        const navigate = useNavigate();

        const name = useSelector((state) => state.auth.name);

        useEffect(()=>{
                selectBooks();
        },[])

        useEffect(() => {
                selectScience(books);
        },[books])
 
        const selectBooks = async () =>
        {
                const response = await getBookList()
                console.log(response);
                console.log(response.data.length);

                if(response['status']===200){
                        setBooks(response.data)
                        console.log("here")
                }
                else{
                        toast.error("UNABLE TO LOAD DATA");
                }

        }
        console.log(books);

        const selectScience = (books) =>
        {
                var arr = [];
                var j = 0;
                console.log(books)
                for(var i = 0; i < books.length; i++){
                        if(books[i]['category'] === "SCIENCE_FICTION"){
                                arr[j] = books[i];
                                j++;
                        }
                }
                setScience(arr);
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

        // const bookList = (books) => {

        //         for(var i =0; i<5; i++){
        //                 <div className="card" style={{width: "18rem", border : '1px solid red', padding : '12px'}}>
        //                         <img src={books[i]['imagePath']} className="card-img-top cardImg"  alt="..."/>
        //                         <div className="card-body">
        //                                 <h4 className="card-title">{books[i]['title']}</h4>
        //                                 <h6>Author : <button className="btn btn-link" onClick={()=>{author(books[i])}}>{books[i].authorName.name}</button></h6>
        //                                 <h6>Price : ₹ {books[i]['discountedPrice']} <s> {books[i]['price']}</s></h6>
        //                                 <br></br>
        //                                 {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
        //                                 <button onClick={()=>{details(books[i])}} style={{backgroundColor : 'orangered', border : 'none'}} className="btn btn-primary">Quick View</button>
        //                         </div>
        //                 </div>
        //         }
        // }



return(<>

{/* Main Carousel Start */}
<div style={{marginTop : "100px"}}>
        <div id="offerImg">
                <Link id="offerImg" to='/bestSelling'>
                        <img id="offerImg" src="https://www.bookswagon.com/images/promotionimages/web/1_alltimefavourite.jpg?v=1.6" style={{width:"100%"}}></img>
                </Link>
        </div><br></br>

        <div id="carouselId" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>

                <div class="carousel-inner" role="listbox">
                        <div class="carousel-item active">
                                <Link to={'/carouselBooks'}>
                                        <img src="https://www.bookswagon.com/images/bannerimages/82_inr.jpg?v=1.8" class="w-100 d-block" alt="First slide"/>
                                </Link>
                                <div class="carousel-caption d-none d-md-block" style={{color:"black"}}>
                                        <h3>Happy Independence Day</h3>
                                        <p>Best Books to Know More About India</p>
                                </div>
                        </div>
                        <div class="carousel-item">
                                <img src="https://www.bookswagon.com/images/bannerimages/79_inr.jpg?v=1.6" class="w-100 d-block" alt="Second slide"/>
                                <div class="carousel-caption d-none d-md-block" style={{color:"black"}}>
                                        <h3>Sale</h3>
                                        <p></p>
                                </div>
                        </div>
                        <div class="carousel-item">
                                <img src="https://www.bookswagon.com/images/bannerimages/81_inr.jpg?v=1.8" class="w-100 d-block" alt="Third slide"/>
                                <div class="carousel-caption d-none d-md-block" style={{color:"black"}}>
                                        <h3>Manga</h3>
                                        <p>Action, adventure, fantasy, mystery, romance, and more</p>
                                </div>
                        </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                </button>
        </div>  
</div>
{/* Main Carousel End */}


{/* All Books div start dynamic */}
        <hr></hr>
<div> 
        <div className="divCard-WrapperTop">
                <h3 style={{fontFamily : "", color : "orangered"}}>All Books</h3>
                <a className="btn btn-link" href="/allBooks">See All</a>
        </div>

<div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">

        <div class="carousel-inner">

        <div class="carousel-item active">
        <div className="card-Wrapper">

        {
                books.slice(0, 5).map((book)=>{
                        return(
                                <div className="card" style={{width: "18rem", border : '1px solid red', padding : '12px'}}>
                                <img src={book['imagePath']} className="card-img-top cardImg"  alt="..."/>
                                <div className="card-body">
                                        <h4 className="card-title">{book['title']}</h4>
                                        <h6>Author : <button className="btn btn-link" onClick={()=>{author(book)}}>{book.authorName.name}</button></h6>
                                        <h6>Price : ₹ {book['discountedPrice']} <s> {book['price']}</s></h6>
                                        <br></br>
                                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                        <button onClick={()=>{details(book)}} style={{backgroundColor : 'orangered', border : 'none'}} className="btn btn-primary">Quick View</button>
                                 </div>
                         </div>
                        );
                })
        }
                
                
        </div>
        </div>

        <div class="carousel-item active">
        <div className="card-Wrapper">

        {
                books.slice(5, 10).map((book)=>{
                        return(
                                <div className="card" style={{width: "18rem", border : '1px solid red', padding : '12px'}}>
                                <img src={book['imagePath']} className="card-img-top cardImg"  alt="..."/>
                                <div className="card-body">
                                        <h4 className="card-title">{book['title']}</h4>
                                        <h6>Author : <button className="btn btn-link" onClick={()=>{author(book)}}>{book.authorName.name}</button></h6>
                                        <h6>Price : ₹ {book['discountedPrice']} <s> {book['price']}</s></h6>
                                        <br></br>
                                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                        <button onClick={()=>{details(book)}} style={{backgroundColor : 'orangered', border : 'none'}} className="btn btn-primary">Quick View</button>
                                 </div>
                         </div>
                        );
                })
        }

        </div>
        </div>

        <div class="carousel-item">       
        <div className="card-Wrapper">

        {
                books.slice(10, 15).map((book)=>{
                        return(
                                <div className="card" style={{width: "18rem", border : '1px solid red', padding : '12px'}}>
                                <img src={book['imagePath']} className="card-img-top cardImg"  alt="..."/>
                                <div className="card-body">
                                        <h4 className="card-title">{book['title']}</h4>
                                        <h6>Author : <button className="btn btn-link" onClick={()=>{author(book)}}>{book.authorName.name}</button></h6>
                                        <h6>Price : ₹ {book['discountedPrice']} <s> {book['price']}</s></h6>
                                        <br></br>
                                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                        <button onClick={()=>{details(book)}} style={{backgroundColor : 'orangered', border : 'none'}} className="btn btn-primary">Quick View</button>
                                 </div>
                         </div>
                        );
                })
        }

        </div>
        </div>
        </div>

                <button style={{width : '100px'}} class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span style={{backgroundColor : 'black'}} class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
                </button>

                <button style={{width : '100px'}} class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span style={{backgroundColor : 'black'}} class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
                </button>
</div>
</div>
{/* All Books div End dynamic */}


{/* Science Friction Books div start */}
        <hr></hr>
<div>
        <div className="divCard-WrapperTop">
                <h3 style={{fontFamily : "", color : "orangered"}}>Science Fiction</h3>
                <Link to={'/scienceBooks'} className="btn btn-link">See All</Link>
        </div>
<div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-bs-ride="carousel">

        <div class="carousel-inner">

        <div class="carousel-item active">
        <div className="card-Wrapper">

        {
                science.slice(0, 5).map((sciences)=>{
                        return(
                                <div className="card" style={{width: "18rem", border : '1px solid red', padding : '12px'}}>
                                <img src={sciences['imagePath']} className="card-img-top cardImg"  alt="..."/>
                                <div className="card-body">
                                        <h4 className="card-title">{sciences['title']}</h4>
                                        <h6>Author : <button className="btn btn-link" onClick={()=>{author(sciences)}}>{sciences.authorName.name}</button></h6>
                                        <h6>Price : ₹ {sciences['discountedPrice']} <s> {sciences['price']}</s></h6>
                                        <br></br>
                                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                        <button onClick={()=>{details(sciences)}} style={{backgroundColor : 'orangered', border : 'none'}} className="btn btn-primary">Quick View</button>
                                </div>
                        </div>
                        );
                })
        }
        
        
        </div>
        </div>

        <div class="carousel-item active">
        <div className="card-Wrapper">

        {
                science.slice(0, 5).map((sciences)=>{
                        return(
                                <div className="card" style={{width: "18rem", border : '1px solid red', padding : '12px'}}>
                                <img src={sciences['imagePath']} className="card-img-top cardImg"  alt="..."/>
                                <div className="card-body">
                                        <h4 className="card-title">{sciences['title']}</h4>
                                        <h6>Author : <button className="btn btn-link" onClick={()=>{author(sciences)}}>{sciences.authorName.name}</button></h6>
                                        <h6>Price : ₹ {sciences['discountedPrice']} <s> {sciences['price']}</s></h6>
                                        <br></br>
                                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                        <button onClick={()=>{details(sciences)}} style={{backgroundColor : 'orangered', border : 'none'}} className="btn btn-primary">Quick View</button>
                                </div>
                        </div>
                        );
                })
        }

        </div>
        </div>

        <div class="carousel-item">       
        <div className="card-Wrapper">

        {
                science.slice(0, 5).map((sciences)=>{
                        return(
                                <div className="card" style={{width: "18rem", border : '1px solid red', padding : '12px'}}>
                                <img src={sciences['imagePath']} className="card-img-top cardImg"  alt="..."/>
                                <div className="card-body">
                                        <h4 className="card-title">{sciences['title']}</h4>
                                        <h6>Author : <button className="btn btn-link" onClick={()=>{author(sciences)}}>{sciences.authorName.name}</button></h6>
                                        <h6>Price : ₹ {sciences['discountedPrice']} <s> {sciences['price']}</s></h6>
                                        <br></br>
                                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                        <button onClick={()=>{details(sciences)}} style={{backgroundColor : 'orangered', border : 'none'}} className="btn btn-primary">Quick View</button>
                                </div>
                        </div>
                        );
                })
        }

        </div>
        </div>

        </div>

        <button style={{width : '100px'}} class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span style={{backgroundColor : 'black'}} class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
        </button>

        <button style={{width : '100px'}} class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span style={{backgroundColor : 'black'}} class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
        </button>
</div>
</div>
{/* Science Friction Book Div End*/}


{/* Hindi Books Div start */}
        <hr></hr>
<div> 
        <div className="divCard-WrapperTop">
                <h3 style={{fontFamily : "", color : "orangered"}}>Hindi Books</h3>
                <a className="btn btn-link" href="/comic">See All</a>
        </div>

<div id="carouselExample" class="carousel slide carousel-fade">
        {/* <ol class="carousel-indicators">
                <li data-bs-target="#carouselExampleFade" data-bs-slide-to="3" class="active" aria-current="true" aria-label="First slide"></li>
                <li data-bs-target="#carouselExampleFade" data-bs-slide-to="4" aria-label="Second slide"></li>
                <li data-bs-target="#carouselExampleFade" data-bs-slide-to="5" aria-label="Third slide"></li>
        </ol> */}

        <div class="carousel-inner">

        <div class="carousel-item active">
        <div className="card-Wrapper">

                <div className="card" style={{width: "18rem", border : '1px solid red', padding : '12px'}}>
                        <img src="https://m.media-amazon.com/images/I/91msEbTletL._AC_UY218_.jpg" className="card-img-top cardImg"  alt="..."/>
                        <div className="card-body">
                                <h4 className="card-title">Card title1</h4>
                                <h5>Author : Author</h5>
                                <h5>Price : Price</h5>
                                <br></br>
                                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                <Link style={{backgroundColor : 'orangered', border : 'none'}} className="btn btn-primary">Quick View</Link>
                        </div>
                </div>

                <div className="card" style={{width: "18rem"}}>
                        <img src="https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/920/9789390547920.jpg" className="card-img-top cardImg"  alt="..."/>
                        <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link style={{backgroundColor : 'orangered', border : 'none'}} className="btn btn-primary">Quick View</Link>
                        </div>
                </div>

                <div className="card" style={{width: "18rem"}}>
                        <img src="https://m.media-amazon.com/images/I/71ox+pwkgrS._AC_UY218_.jpg" className="card-img-top cardImg"  alt="..."/>
                        <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link style={{backgroundColor : 'orangered', border : 'none'}} className="btn btn-primary">Quick View</Link>
                        </div>
                </div>

                <div className="card" style={{width: "18rem"}}>
                        <img src="https://m.media-amazon.com/images/I/71ybul+HfOL._AC_UY218_.jpg" className="card-img-top cardImg"  alt="..."/>
                        <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link style={{backgroundColor : 'orangered', border : 'none'}} className="btn btn-primary">Quick View</Link>
                        </div>
                </div>

                <div className="card" style={{width: "18rem"}}>
                        <img src="https://m.media-amazon.com/images/I/81ZhjrARg2L._AC_UY218_.jpg" className="card-img-top cardImg"  alt="..."/>
                        <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link style={{backgroundColor : 'orangered', border : 'none'}} className="btn btn-primary">Quick View</Link>
                        </div>
                </div>

        </div>
        </div>

        <div class="carousel-item">
        <div className="card-Wrapper">

                <div className="card" style={{width: "18rem"}}>
                        <img src="https://m.media-amazon.com/images/I/81Ud-NlxN0L._AC_UY218_.jpg" className="card-img-top cardImg"  alt="..."/>
                        <div className="card-body">
                                <h5 className="card-title">Card title2</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                </div>

                <div className="card" style={{width: "18rem"}}>
                        <img src="https://www.bookswagon.com/productimages/mainimages/254/9788171826254.jpg" className="card-img-top cardImg"  alt="..."/>
                        <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                </div>

                <div className="card" style={{width: "18rem"}}>
                        <img src="https://m.media-amazon.com/images/I/719bK0OgmVL._AC_UY218_.jpg" className="card-img-top cardImg"  alt="..."/>
                        <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                </div>

                <div className="card" style={{width: "18rem"}}>
                        <img src="https://m.media-amazon.com/images/I/81qphxNrRqL._AC_UY218_.jpg" className="card-img-top cardImg"  alt="..."/>
                        <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                </div>

                <div className="card" style={{width: "18rem"}}>
                        <img src="https://m.media-amazon.com/images/I/71vLNvert4L._AC_UY218_.jpg" className="card-img-top cardImg"  alt="..."/>
                        <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                </div>

        </div>
        </div>

        <div class="carousel-item">       
        <div className="card-Wrapper">

                <div className="card" style={{width: "18rem"}}>
                        <img src="https://m.media-amazon.com/images/I/61eIQr8OB0L._AC_UY218_.jpg" className="card-img-top cardImg"  alt="..."/>
                        <div className="card-body">
                                <h5 className="card-title">Card title3</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                </div>

                <div className="card" style={{width: "18rem"}}>
                        <img src="https://m.media-amazon.com/images/I/41ERRKixKdL.AC_SX250.jpg" className="card-img-top cardImg"  alt="..."/>
                        <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                </div>

                <div className="card" style={{width: "18rem"}}>
                        <img src="https://m.media-amazon.com/images/I/41djPUPc1ML._AC_UY218_.jpg" className="card-img-top cardImg"  alt="..."/>
                        <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="/book" className="btn btn-primary">Go somewhere</a>
                        </div>
                </div>

                <div className="card" style={{width: "18rem"}}>
                        <img src="https://m.media-amazon.com/images/I/71rYps2bfVL._AC_UY218_.jpg" className="card-img-top cardImg"  alt="..."/>
                        <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                </div>

                <div className="card" style={{width: "18rem"}}>
                        <img src="https://rukminim1.flixcart.com/image/416/416/jgb5dow0/book/4/2/6/lal-bahadur-shastri-hindi-original-imaf4kxtxdbegmpf.jpeg?q=70" className="card-img-top cardImg"  alt="..."/>
                        <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                </div>

        </div>
        </div>
        </div>

                <button style={{width : '100px'}} class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span style={{backgroundColor : 'black'}} class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
                </button>

                <button style={{width : '100px'}} class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span style={{backgroundColor : 'black'}} class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
                </button>
</div>
</div>
{/* Hindi Books Div end */}


{/* Award Winner Books Div end */}
        <hr></hr>
        <div className="divCard-WrapperTop">
                <h3 style={{fontFamily : "", color : "orangered"}}>Award Winner</h3>
                <Link className="btn btn-link">See All</Link>
        </div>
{/* Award Winner Books Div end */}


{/* Friction Books Div end */}
        <hr></hr>
        <div className="divCard-WrapperTop">
                <h3 style={{fontFamily : "", color : "orangered"}}>Fiction</h3>
                <button className="btn btn-link">See All</button>
        </div>
{/* Friction Books Div end */}

        
        


{/* </div>         */}
                
                
        {/* <div className=""> */}
{/* 
                <div>
                        <a href="./Sample.js">
                                <img src="https://www.bookswagon.com/images/promotionimages/web/1_alltimefavourite.jpg?v=1.6"></img>
                        </a>
                </div>

                <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="https://www.bookswagon.com/images/bannerimages/79_inr.jpg?v=1.6" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src="https://www.bookswagon.com/images/bannerimages/82_inr.jpg?v=1.8" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src="https://www.bookswagon.com/images/bannerimages/81_inr.jpg?v=1.8" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src="https://www.bookswagon.com/images/bannerimages/83_inr.jpg?v=1.8" class="d-block w-100" alt="..."/>
                </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
                </button>
                </div>
        </div> */}

                {/* <div>
                        <a href="">
                                <img src="https://www.bookswagon.com/images/promotionimages/web/1_alltimefavourite.jpg?v=1.6"></img>
                        </a>
                </div>
                <div id="carouselExample" class="carousel slide">
                        <div class="carousel-inner">
                                <div class="carousel-item active">
                                        <img src="https://www.bookswagon.com/images/bannerimages/79_inr.jpg?v=1.6" class="d-block w-100" alt="..."/>
                                </div>
                                <div class="carousel-item">
                                        <img src="https://www.bookswagon.com/images/bannerimages/81_inr.jpg?v=1.8" class="d-block w-100" alt="..."/>
                                </div>
                                <div class="carousel-item">
                                        <img src="https://www.bookswagon.com/images/bannerimages/82_inr.jpg?v=1.8" class="d-block w-100" alt="..."/>
                                </div>
                                <div class="carousel-item">
                                        <img src="https://www.bookswagon.com/images/bannerimages/83_inr.jpg?v=1.8" class="d-block w-100" alt="..."/>
                                </div>
                        </div>

                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                        </button>

                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                        </button>
                </div> */}

                        {/* <div id="carouselExampleIndicators" class="carousel slide">
                        <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src="https://www.bookswagon.com/images/bannerimages/82_inr.jpg?v=1.8" class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                        <img src="https://www.bookswagon.com/images/bannerimages/84_inr.jpg?v=1.6" class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                        <img src="https://www.bookswagon.com/images/bannerimages/80_inr.jpg?v=1.6" class="d-block w-100" alt="..."/>
                        </div>
                        </div>

                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                        </button>

                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                        </button>
                        </div> */}

        </>)
}

export default Dashboard;