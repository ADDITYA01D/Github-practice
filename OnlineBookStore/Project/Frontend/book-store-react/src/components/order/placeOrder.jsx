import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getDefaultAddress } from '../../services/addressService';
import { Link } from 'react-router-dom';
import { getItemList } from '../../services/cartService';
import { toast } from 'react-toastify';

function PlaceOrder() {

        const customerId = useSelector((state) => state.user.id)
        const firstName = useSelector((state) => state.user.firstName)
        const lastName = useSelector((state) => state.user.lastName)
        const mobile = useSelector((state) => state.user.mobile)
        const token = useSelector((state) => state.auth.token)
        const [address, setAddress] = useState({
                id: '',
                fullName: '',
                mobile: '',
                houseInfo: '',
                street: '',
                landmark: '',
                zipcode: '',
                city: '',
                state: '',
                isDefault: "false"
        });
        const [cartItems,setCartItems] = useState([]);
        

        const[totalQty1, setTotalQty1] = useState(0);
        const[totalPrice1, setTotalPrice1] = useState(0);
        const[totalDiscountedPrice1, setTotalDiscountedPrice1] = useState(0);
        
        var totalQty = 0;
        var totalPrice = 0;
        var totalDiscountedPrice = 0;
        const calculateData = () => {
                cartItems.map((item) => {
                        console.log(item.quantity)
                        totalQty += item.quantity
                        totalPrice += item.totalPrice
                        totalDiscountedPrice += item.totalDiscountedPrice
                })
                console.log(totalQty + " " + totalPrice + " " + totalDiscountedPrice);
                setTotalQty1(totalQty);
                setTotalPrice1(totalPrice);
                setTotalDiscountedPrice1(totalDiscountedPrice);
        }
        useEffect(() => {
                calculateData();
        },[cartItems])





        useEffect(() => {
                loadDefaultAddress();
                loadCartItems();
        }, [])

        const loadDefaultAddress = async () => {
                const response = await getDefaultAddress(customerId, token);
                console.log(response.data)
                if(response.status == 200) {
                        const data = response.data;
                        setAddress({
                                id : data.id,
                                fullName : data.fullName,
                                mobile : data.mobile,
                                houseInfo : data.houseInfo,
                                street : data.street,
                                landmark : data.landmark,
                                zipcode : data.zipcode,
                                city : data.city,
                                state : data.state,
                                isDefault : data.isDefault,
                            })
                } else {
                        toast.error("Unexpected Error!")
                }

        } 

        const loadCartItems = async () => {
                const response = await getItemList(customerId, token);
                if(response.status === 200) {
                        console.log(response.data);
                        setCartItems(response.data);
                } else {
                        toast.error("Unexpected Error!")
                }
                
        }
         

        

        return(<>
        <br></br><br></br><br></br><br></br>
                <div className="container" style={{width:"70%"}} >
                        <div style={{display:"flex",justifyContent:"space-between", width:"100%"}}>
                                <div style={{display:"flex", flexDirection:"column", width:"64%"}}>
                                        <div style={{height:"70px", border:"1px solid #FF7043", width:"100%", backgroundColor:"white",paddingLeft:"10px", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
                                                <span style={{fontSize:"20px", color:"gray"}}>LOGIN</span><CheckOutlinedIcon style={{color:"red", fontSize:25,marginBottom:"7px"}}/>
                                                <br/><span style={{fontWeight:400}}>{firstName} {lastName}</span> <span style={{fontWeight:300}}> &nbsp;&nbsp;&nbsp;+91{mobile}</span>
                                        </div>
                                        
                                        <div style={{ width:"100%", border:"1px solid #FF7043", backgroundColor:"white", marginTop:"15px", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
                                                <div style={{display : "flex", justifyContent : "space-between", height:"55px", width:"100%", backgroundColor:"#FF7043", padding : "10px"}}>
                                                        <div style={{color : "white"}}><h5>DELIVERY ADDRESS</h5></div>
                                                        <Link to="/address" className='btn btn-danger' style={{border : "2px solid white", color : "white", backgroundColor : "#FF7043", borderRadius : "3px", paddingLeft : "10px", paddingRight : "10px", }}>CHANGE</Link>
                                                </div>
                                                <div style={{paddingTop:"10px"}}>
                                                        {
                                                                (address.isDefault === undefined) ?
                                                                        (
                                                                                <>
                                                                                        <div style={{display : "flex", justifyContent : "center"}}>
                                                                                                <span style={{margin : "15px"}}>No Address Found!</span>
                                                                                                <Link to="/add_address" style={{margin : "15px", color:"green"}} >Add Address</Link>
                                                                                        </div>
                                                                                </>
                                                                        )
                                                                 
                                                                        :(address.isDefault === "true")?
                                                                        (
                                                                                <>
                                                                                <div style={{padding:"10px"}}>
                                                                                        <span style={{fontWeight:400}}>{firstName} {lastName}</span> <span style={{fontWeight:300}}> &nbsp;&nbsp;&nbsp;+91{mobile}</span><br/>
                                                                                        <span>
                                                                                                {address.houseInfo},&nbsp;
                                                                                                {address.street},&nbsp;
                                                                                                {address.landmark},&nbsp;
                                                                                                {address.city},&nbsp;
                                                                                                {address.state} - {address.zipcode}
                                                                                        </span>
                                                                                </div>
                                                                                </>
                                                                        ):(<></>)
                                                                
                                                        }
                                                </div>
                                        </div>

                                        <div style={{ width:"100%", border:"1px solid #FF7043", backgroundColor:"white", marginTop:"15px", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
                                                <div style={{display : "flex", justifyContent : "space-between", height:"50px",         width:"100%", backgroundColor:"#FF7043", padding : "10px"}}>
                                                        <div style={{color : "white"}}><h5>ORDER SUMMARY</h5></div>
                                                </div>

                                                <div>
                                                        {
                                                                cartItems.map((item) => {
                                                                        return (
                                                                        <>
                                                                                <div style={{display:"flex", justifyContent :"space-around", margin: "12px", width : "96%", padding: "4px", border : "1px solid gray"}}>
                                                                                        <div style={{height:"100px", width:"100px"}}>
                                                                                        <img src={item.book.imagePath} style={{height:"100px", width:"100px"}}/>
                                                                                        </div> 
                                                                                        
                                                                                        <div style={{backgroundColor :"", width : "82%"}}>
                                                                                                <div>Title : {item.book.title}</div>
                                                                                                <div>Author : {item.book.authorName}</div>
                                                                                                <div>Quantity : {item.quantity}</div>
                                                                                                <div>Sub-Total Price : <s>₹{item.totalPrice}</s> ₹{item.totalDiscountedPrice}</div>
                                                                                        </div>
                                                                                </div>
                                                                        </>
                                                                        )
                                                                })
                                                        }

                                                </div>
                                        </div>

                                        <div style={{ height: "200px", border: "1px solid #FF7043", width: "100%", backgroundColor: "white", marginTop: "15px", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
                                                <div style={{ display: "flex", justifyContent: "space-between", height: "50px", width: "100%", backgroundColor: "#FF7043", padding: "10px" }}>
                                                        <div style={{ color: "white" }}><h5>PAYMENT OPTIONS</h5></div>
                                                </div>

                                                <div style={{padding:"15px", display:"flex", justifyContent:"space-between"}}>
                                                        <div>
                                                                <div class="form-check">
                                                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                                                <label class="form-check-label" for="flexRadioDefault1">
                                                                                        Cash On Delivery
                                                                                </label>
                                                                </div>
                                                                <div class="form-check">
                                                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                                                                                <label class="form-check-label" for="flexRadioDefault2">
                                                                                        Online Card Payment
                                                                                </label>
                                                                </div>
                                                                <div class="form-check">
                                                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" checked/>
                                                                                <label class="form-check-label" for="flexRadioDefault3">
                                                                                        Online UPI Payment
                                                                                </label>
                                                                </div>
                                                        </div>
                                                        <div style={{marginTop:"80px", }}>
                                                                <Link to={'/make_payment'} className='btn btn-success'>Make Payment</Link>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                                
                                <div style={{backgroundColor:"", width:"20%",height:"50%",position:"fixed", marginLeft : "45%"}}>
                                       
                                       
                                        <div style={{ height:"85%", border:"1px solid #FF7043", width:"100%",backgroundColor:"while",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", padding:"15px" }}>

                                                <div style={{color:"gray", fontSize:"20px"}}>PRICE DETAILS</div>
                                                <hr style={{marginTop:"6px"}}/>
                                                <div style={{display:"flex",padding:"10px", justifyContent:"space-between"}}>
                                                        <div>Price ({totalQty1} Items)</div>
                                                        <div>₹{totalPrice1}</div>
                                                </div>
                                                <div style={{display:"flex",padding:"10px", justifyContent:"space-between"}}>
                                                        <div>Discount</div>
                                                        <div style={{color:"green"}}>- ₹{totalPrice1 - totalDiscountedPrice1}</div>
                                                </div>
                                                <div style={{display:"flex",padding:"10px", justifyContent:"space-between"}}>
                                                        <div>Delivery Charges</div>
                                                        <div style={{color:"green"}}>Free</div>
                                                </div>
                                                <div style={{display:"flex",padding:"10px", justifyContent:"space-between"}}>
                                                        <div>Packaging Fee</div>
                                                        <div style={{color:"green"}}>Free</div>
                                                </div>
                                                <hr style={{marginTop:"6px", borderTop:"1px dotted"}}/>
                                                <div style={{display:"flex",padding:"10px",fontWeight:"bold", justifyContent:"space-between"}}>
                                                        <div>Total Payable</div>
                                                        <div>₹{totalDiscountedPrice1}</div>
                                                </div>
                                                <hr style={{marginTop:"6px", borderTop:"1px dotted", marginBottom:"5px"}}/>
                                                <div style={{display:"flex", padding:"10px",fontWeight:"bold", color:"green"}}>
                                                        <span>You will save ₹{totalPrice1 - totalDiscountedPrice1} on this order.</span>
                                                        
                                                </div>
                                        </div>


                                        <div style={{display:"flex",justifyContent:"space-around", marginTop:"15px", width:"100%"}}>
                                                <div>
                                                        <VerifiedUserIcon sx={{fontSize:35, color:"#646464"}}/>
                                                </div>
                                                <div style={{width:"85%", color:"gray"}}>
                                                        <h5 style={{fontSize:"15px", color:"gray"}}>Safe and Secure Payments. Easy returns. 100% Authentic books.</h5>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        </>)
}

export default PlaceOrder;