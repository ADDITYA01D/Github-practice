import { useNavigate, Link } from 'react-router-dom';
import React from "react";

function Faq() {
    
    return ( 
        <>
            <div className='text-danger f-2' style={{textAlign : 'center', marginTop : '100px'}}>
                <h3 style={{fontSize : 50}}>FAQs</h3>
        </div>
        <div className='container-fluid d-flex' style={{marginTop:"70px"}}>

                <div className="col-md-8 col-lg-9" style={{paddingLeft:"50px", display:"flex", flexDirection:"column", flexWrap:"wrap"}}>
                    <h3 style={{display: "inline-block"}}>
                        <span className='text'>
                            Q.1. What is the policy provided for return?
                        </span>
                    </h3>
                    <div style={{display:"inline", marginTop:"5px"}}>
                        <div>
                        <ul style={{listStyleType:"square"}}>
                            <li >We always ensure that the products sold on BookStore are new and 100% genuine. Regardless, if there is any issue with the delivered product, we assure simple and costless return policies for the return of any damaged product(s). Possible solutions for these issues could be replacing, exchanging or refunding of the product or amount value depending on seller’s return process.</li>
                        </ul>
                        </div>
                    </div>
                    <hr />
                    <h3 style={{display: "inline-block"}}>
                        <span className='text'>
                            Q.2. When will I get my replacement order?
                        </span>
                    </h3>
                    <div style={{display:"inline", marginTop:"5px"}}>
                        <div>
                        <ul style={{listStyleType:"square"}}>
                            <li >You will receive the details about the pickup as soon we get the replacement request either by mail or by call from customer support. In near locations, the replaced product will be given off at the time off pickup. Whereas in other location, the replaced copy will be dispatched only after seller receive you package. You are asked to contact us instantly if you don’t get the replaced package within predefined time limit.</li>
                        </ul>
                        </div>
                    </div>
                    <hr />
                    <h3 style={{display: "inline-block"}}>
                        <span className='text'>
                            Q.3. Can you tell me about BookStore packaging process?
                        </span>
                    </h3>
                    <div style={{display:"inline", marginTop:"5px"}}>
                        <div>
                        <ul style={{listStyleType:"square"}}>
                            <li >BookStore provides waterproof plastic sheet for wrapping the items being purchased from us. For fragile items, we will bubble wrap the product to ensure its safety. We follow all the standard instructions for wrapping and provide adept packaging quality for the satisfaction of our customers.</li>
                        </ul>
                        </div>
                    </div>
                    <hr />
                    <h3 style={{display: "inline-block"}}>
                        <span className='text'>
                            Q.4. Why can’t I receive order in my area?
                        </span>
                    </h3>
                    <div style={{display:"inline", marginTop:"5px"}}>
                        <div>
                        <ul style={{listStyleType:"square"}}>
                            <li >It could be possible because of following reasons:</li>
                            <li>Your location is not suitable for shipping the products.</li>
                            <li>There might be legal boundary of delivery of that product in your region.</li>
                            <li>There might not be any available courier service in your region.</li>
                        </ul>
                        </div>
                    </div>
                    <hr />
                    <h3 style={{display: "inline-block"}}>
                        <span className='text'>
                            Q.5. What would be the delivery charges on BookStore?
                        </span>
                    </h3>
                    <div style={{display:"inline", marginTop:"5px"}}>
                        <div>
                        <ul style={{listStyleType:"square"}}>
                            <li >Delivery charges will vary from order to order depending on your location.</li>
                        </ul>
                        </div>
                    </div>
                </div>
        </div>
        </>
    );
}

export default Faq;