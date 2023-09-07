import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function Author() {

    const location = useLocation();
    const author = location.state.dataObj.authorName;
    console.log(author); // Access the passed book details
    // console.log(props);
    return ( 
        <>

        <div className='text-danger f-2' style={{textAlign : 'center', marginTop : '50px'}}>
                <h3 style={{fontSize : 50}}>About the Author</h3>
        </div>
        <div className='container-fluid d-flex' style={{marginTop:"170px"}}>
                <div className="col-md-4 col-lg-3 border  d-flex align-items-center justify-content-center" style={{padding: "25px", minHeight: "300px"}} >
                    <img src={author.imagePath} alt='book_name' style={{height:300, width:200}} />
                </div>

                <div className="col-md-8 col-lg-9" style={{paddingLeft:"50px"}}>
                    <h2 style={{display: "inline-block"}}>
                        <span className='text-danger'>{author.name}</span>
                    </h2>
                    <br/>
                    <hr size="5px"></hr>
                    <div style={{display:"inline", marginTop:"20px"}}>
                        <div>
                                <i>{author.bio}</i>
                        </div>
                    </div>
                </div>
        </div>
        </>
     );
}

export default Author;