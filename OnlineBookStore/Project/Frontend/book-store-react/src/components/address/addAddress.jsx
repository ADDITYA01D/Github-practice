import { Link, useNavigate } from "react-router-dom";
import "./add_address.css"
import { useState } from "react";
import { addAddress } from "../../services/addressService";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";



function AddAddress() {

    const navigate = useNavigate();
    const customerId = useSelector((state) => state.user.id);
    const token = useSelector((state) => state.auth.token)
    
    const [address, setAddress] = useState({
        fullName: '',
        mobile: '',
        houseInfo: '',
        street: '',
        landmark: '',
        zipcode: '',
        city: '',
        state: '',
        isDefault: false
    })

    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [checkbox, setCheckbox] =useState(false);
    

    const handleChange = (e) => {
        const {name, value} = e.target;

        setAddress((prevState => {
            return {
                ...prevState,
                [name]: value
            }
        }))
    }

    const handleCheckbox = () => {
        setCheckbox(!checkbox);
        console.log(checkbox)
    }
    

    const handleAddAddress =async (e) => {
        e.preventDefault();

        console.log(address);
        if(!address.fullName || !address.mobile || !address.houseInfo || !address.street || !address.landmark || !address.zipcode || !address.city || !address.state) {
            return
        }
        setLoading(true);
        const response = await addAddress(customerId,address,token);

        if(response.status === 200) {
            console.log(response.data.message)
            toast.success("Address Added Successfully!")
            navigate("/address")
        } else {
            console.log(response.status)
            setErrorMessage("Unexpected Error")
        }
        setLoading(false);

    }


    return ( 
        <>
        <br/><br/><br/>


        <div className="container customWidthSmall customWidthBig">
        <h6 style={{ fontWeight:300}}>
            <Link to="/my_account" style={{color:"#df2712", textDecoration:"none"}}>My Account</Link> &gt; 
            <Link to="/address" style={{color:"#df2712", textDecoration:"none"}}> My Address</Link>  &gt; Add Address
        </h6>
        <br/>
            <form 
            onSubmit={(e) => handleAddAddress(e)}
            >
                <div style={{marginBottom:"25px"}}>
                    <label className="form-label" style={{fontSize:"13px",fontWeight:"bold",position:"absolute",marginTop:"-10px",marginLeft:"20px",backgroundColor:"white"}}>
                        Full Name
                    <span style={{color:"red"}}> *</span>
                    </label>
                    <input type="text" name="fullName" onChange={(e) => handleChange(e)} value={address.fullName} class="form-control" style={{border:"1px solid gray", borderRadius:"0px", boxShadow:"none", fontSize:"16px", padding:"7px"}}/>
                </div>
                <div style={{marginBottom:"25px"}}>
                    <label className="form-label" style={{fontSize:"13px",fontWeight:"bold",position:"absolute",marginTop:"-10px",marginLeft:"20px",backgroundColor:"white"}}>
                        Mobile
                    <span style={{color:"red"}}> *</span>
                    </label>
                    <input type="number" name="mobile" onChange={(e) => handleChange(e)} value={address.mobile} class="form-control" style={{border:"1px solid gray", borderRadius:"0px", boxShadow:"none", fontSize:"16px", padding:"7px"}}/>
                </div>
                <div style={{marginBottom:"25px"}}>
                    <label className="form-label" style={{fontSize:"13px",fontWeight:"bold",position:"absolute",marginTop:"-10px",marginLeft:"20px",backgroundColor:"white"}}>
                        House Info
                    <span style={{color:"red"}}> *</span>
                    </label>
                    <input type="text" name="houseInfo" onChange={(e) => handleChange(e)} value={address.houseInfo} class="form-control" style={{border:"1px solid gray", borderRadius:"0px", boxShadow:"none", fontSize:"16px", padding:"7px"}}/>
                </div>
                <div style={{marginBottom:"25px"}}>
                    <label className="form-label" style={{fontSize:"13px",fontWeight:"bold",position:"absolute",marginTop:"-10px",marginLeft:"20px",backgroundColor:"white"}}>
                        Street Address
                    <span style={{color:"red"}}> *</span>
                    </label>
                    <input type="text" name="street" onChange={(e) => handleChange(e)} value={address.street} class="form-control" style={{border:"1px solid gray", borderRadius:"0px", boxShadow:"none", fontSize:"16px", padding:"7px"}}/>
                </div>
                <div style={{marginBottom:"25px"}}>
                    <label className="form-label" style={{fontSize:"13px",fontWeight:"bold",position:"absolute",marginTop:"-10px",marginLeft:"20px",backgroundColor:"white"}}>
                        Landmark
                    {/* <span style={{color:"red"}}> *</span> */}
                    </label>
                    <input type="text" name="landmark" onChange={(e) => handleChange(e)} value={address.landmark} class="form-control" style={{border:"1px solid gray", borderRadius:"0px", boxShadow:"none", fontSize:"16px", padding:"7px"}}/>
                </div>
                <div style={{marginBottom:"25px"}}>
                    <label className="form-label" style={{fontSize:"13px",fontWeight:"bold",position:"absolute",marginTop:"-10px",marginLeft:"20px",backgroundColor:"white"}}>
                        Pin/Zip Code
                    <span style={{color:"red"}}> *</span>
                    </label>
                    <input type="number" name="zipcode" onChange={(e) => handleChange(e)} value={address.zipcode} class="form-control" style={{border:"1px solid gray", borderRadius:"0px", boxShadow:"none", fontSize:"16px", padding:"7px"}}/>
                </div>
                <div style={{marginBottom:"25px"}}>
                    <label className="form-label" style={{fontSize:"13px",fontWeight:"bold",position:"absolute",marginTop:"-10px",marginLeft:"20px",backgroundColor:"white"}}>
                        City
                    <span style={{color:"red"}}> *</span>
                    </label>
                    <input type="text" name="city" onChange={(e) => handleChange(e)} value={address.city} class="form-control" style={{border:"1px solid gray", borderRadius:"0px", boxShadow:"none", fontSize:"16px", padding:"7px"}}/>
                </div>
                <div style={{marginBottom:"25px"}}>
                    <label className="form-label" style={{fontSize:"13px",fontWeight:"bold",position:"absolute",marginTop:"-10px",marginLeft:"20px",backgroundColor:"white"}}>
                        State
                    <span style={{color:"red"}}> *</span>
                    </label>
                    <input type="text" name="state" onChange={(e) => handleChange(e)} value={address.state} class="form-control" style={{border:"1px solid gray", borderRadius:"0px", boxShadow:"none", fontSize:"16px", padding:"7px"}}/>
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" value = {!checkbox} name="isDefault" onChange={(e) => handleChange(e)} onClick={handleCheckbox} checked={checkbox} style={{boxShadow:"none"}}/>
                    <label class="form-check-label" style={{fontSize:"13px", fontWeight:"bold"}}>Make this my default address</label>
                </div>
                <button type="submit" class="btn btn-sm btn-danger" style={{borderRadius:"0px"}}>Submit</button>
                <Link to="/address" class="btn btn-sm btn-outline-danger" style={{borderRadius:"0px", marginLeft:"10px", backgroundColor:"white", color:"red"}}>Cancel</Link>
            </form>
            </div>
        </> 
    );
}

export default AddAddress;