import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { deleteAddress, getAddressList } from "../../services/addressService";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import AddLocationIcon from "@mui/icons-material/AddLocation"

function Address() {

        const navigate = useNavigate();
        const id = useSelector((state) => state.user.id);

        const token = useSelector((state) => state.auth.token)

        const [address, setAddress] = useState([]);

        

        useEffect(() => {
                selectAddress();
        },[])

        const selectAddress = async () => {

                const response = await getAddressList(id,token);
                console.log(response);

                if(response['status']===200){
                setAddress(response.data)
                console.log("here")
                }
                else{
                toast.error("UNABLE TO LOAD DATA");
                }
        }

        const handleDelete = async (addressId) => {
                const response = await deleteAddress(addressId,token);
                console.log(response);
                if(response["status"] === 200) {
                        toast.success("Address Deleted!");
                        selectAddress();
                } else {
                        toast.error("error");
                }
        }

        const handleEdit = async (addressId) => {
                navigate("/address/edit", {state:{addressId:addressId}});
        }


        return (
        <>
                <br />
                <br/><br/>
                <div className="container">
                <h6 style={{ fontWeight:300}}><Link to="/my_account" style={{color:"#df2712", textDecoration:"none"}}>My Account</Link> &gt; Adresses</h6>
                <br></br>
                <h6><i><b>My Addresses</b></i></h6>
                        <div style={{display:"flex", flexWrap:"wrap"}}>
                                {
                                        address.map((adr) => {
                                                if(adr.isDefault === "true") {
                                                        return (
                                                                <>
                                                                    <div className="card" style={{ width: "17rem", height: "17rem", backgroundColor:"#f8f8f8"}}>
                                                                        <div className="card-body">
                                                                                <h5 className="card-title">Address {adr.id} <span style={{marginLeft:"60px", color:"red"}}>Default</span></h5>
                                                                                <hr></hr>
                                                                                <h6 className="card-subtitle mb-2 text-body-secondary">{adr.fullName}</h6>
                                                                                <p className="card-text">
                                                                                        {adr.street} <br/>
                                                                                        {adr.landmark}<br/>
                                                                                        {adr.city} - {adr.zipcode} <br/>
                                                                                        {adr.state} <br/>
                                                                                        Mobile - {adr.mobile}
                                                                                
                                                                                </p>
                                                                                
                                                                                <button className="btn btn-link" onClick={() => {handleEdit(adr.id)}} style={{color:"red", textDecoration:"none"}} >Edit</button>
                                                                                <span style={{color:"GrayText"}}> | </span>
                                                                                <button className="btn btn-link" onClick={handleDelete} style={{color:"red", textDecoration:"none"}} disabled="true">Remove</button>
        
                                                                                </div>
                                                                        </div>    
                                                                </>
                                                        )

                                                } else {
                                                        return (
                                                                <>
                                                                     <div className="card" style={{ width: "17rem", height: "17rem", backgroundColor:"#f8f8f8"}}>
                                                                        <div className="card-body">
                                                                                <h5 className="card-title">Address {adr.id}</h5>
                                                                                <hr></hr>
                                                                                <h6 className="card-subtitle mb-2 text-body-secondary">{adr.fullName}</h6>
                                                                                <p className="card-text">
                                                                                        {adr.street} <br/>
                                                                                        {adr.landmark}<br/>
                                                                                        {adr.city} - {adr.zipcode} <br/>
                                                                                        {adr.state} <br/>
                                                                                        Mobile - {adr.mobile}
                                                                                
                                                                                </p>
                                                                                
                                                                                <button className="btn btn-link" onClick={() => {handleEdit(adr.id)}} style={{color:"red", textDecoration:"none"}} >Edit</button>
                                                                                <span style={{color:"GrayText"}}> | </span>
                                                                                <button className="btn btn-link" onClick={() => {handleDelete(adr.id)}} style={{color:"red", textDecoration:"none"}} >Remove</button>
        
                                                                                </div>
                                                                        </div>   
                                                                </>
                                                        )
                                                }
                                        })
                                }
                                {/* <div className="card" style={{ width: "17rem", backgroundColor:"#f8f8f8"}}>
                                        <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <hr></hr>
                                                <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                <Link to="/address/edit" style={{color:"#078be3", textDecoration:"none"}} >Edit</Link>
                                                <span style={{color:"GrayText"}}> | </span>
                                                <Link to="/address/remove" style={{color:"red", textDecoration:"none"}}>Remove</Link>

                                        </div>
                                </div> */}
                                <div className="card" style={{ width: "17rem", backgroundColor:"#f8f8f8"}}>
                                        <div className="card-body">
                                                <center>
                                                        <Link to="/add_address" style={{color:"#078be3", textDecoration:"none"}}>
                                                                <AddLocationIcon sx={{ fontSize: 150,color:"#f03434" }}/>
                                                                <br/>
                                                                Add Address
                                                        </Link>
                                                </center>
                                        </div>
                                </div>
                        </div>
                </div>
        </>
        )
}

export default Address;