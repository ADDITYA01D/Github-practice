import React from "react";

function AboutUs() {

    return ( 
        <>
        <br/>
        <div className='text-danger f-2' style={{textAlign : 'center', marginTop : '50px'}}>
            <h3 style={{fontSize : 50}}>About Us</h3>
        </div>
        <div className='container-fluid d-flex' style={{marginTop:"80px", marginBottom:"155px"}}>

                <div className="col-md-8 col-lg-9" style={{width:"90%",paddingLeft:"50px", display:"flex", flexDirection:"column", flexWrap:"wrap"}}>
                    <h4 style={{display: "inline-block"}}>
                        <span className='text'>
                        Dear readers,<span><br/></span>

We offer a huge collection of books from diverse categories of Fiction, Non-fiction, Biographies, History, Religion, Self-Help, etc. We also offer a collection of Investments and Management, Computers, Engineering, Medical, College and School text reference books.
We strive for customer satisfaction by offering a user-friendly search engine, efficient payment options and seamless delivery systems. Apart from all this, we also provide great deals and discounts on our products.
All the Publishers, Distributors and Authors around the country are welcome to partner with us and grow the BookStore family. We would like to thank our customers for shopping with us. You can write to us on our e-mail id to share any suggestions or feedback you might have regarding our website or services.
                        </span>
                    </h4>
                    
                </div>
        </div>
        
        </>
    );
}



export default AboutUs;