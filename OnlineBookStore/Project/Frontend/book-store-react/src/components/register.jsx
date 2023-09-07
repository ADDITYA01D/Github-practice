import React, { useState } from "react";
import { registerUser } from "../services/register";
import { useNavigate } from "react-router-dom";

function Register() {

    const navigate = useNavigate();
    
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        password: '',
    })
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);
    

    const handleChange = (e) => {
        const {name, value} = e.target;

        setUser((prevState => {
            return {
                ...prevState,
                [name]: value
            }
        }))
    }

    const handleRegister = async (e) => {
        e.preventDefault();

        console.log(user);
        if(!user.firstName || !user.lastName || !user.password || !user.email || !user.mobile) {
            return
        }
        setLoading(true);
        const response = await registerUser(user.firstName, user.lastName,user.email,user.mobile, user.password);

        if(response.status === 200) {
            navigate("/login")
        } else if(response.response.status === 409){
            setErrorMessage("User Already Exists!")
        } else {
            console.log(response.status)
            setErrorMessage("Unexpected Error")
        }
        setLoading(false);

    }
    

    return (<>
    <center>
        <br/>
    <div className='centres' style={{paddingTop:"110px", paddingBottom:"60px"}}>
        <div className='regis' style={{backgroundColor : '#ECEFF1' , height : "700px", width : "600px", padding : "40px", borderRadius : "40px", border : "5px solid red"}}>
            <div className="container" style={{ backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",
                height: "600px", width: "400px", borderRadius : '15px'
            }}>

            <div className="mb-3">
                <p className="h2">Create Account</p>
            </div>
            <form 
                onSubmit={(e) => handleRegister(e)}
                >
            <div className="mb-3">
                <label className="form-label">First Name</label>
                <input type="text" className="form-control" name="firstName" value={user.firstName} placeholder="First name" onChange={(e) => handleChange(e)}/>
            </div>

            <div className="mb-3">
                <label className="form-label">Last Name</label>
                <input type="text" className="form-control" name="lastName" value={user.lastName} placeholder="Last name" onChange={(e) => handleChange(e)}/>
            </div>

            <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control" name="email" value={user.email} placeholder="name@example.com" onChange={(e) => handleChange(e)} />
            </div>

            <div className="mb-3">
                <label className="form-label">Mobile</label>
                <input type="number" className="form-control" name="mobile" value={user.mobile} placeholder="name@example.com" onChange={(e) => handleChange(e)} />
            </div>

            <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" name="password" value={user.password} placeholder="Atleast 6 characters" onChange={(e) => handleChange(e)} />
            </div>

            <div className="mb-3" style={{ display: 'flex', alignContent: "center", justifyContent: "center" }}>
                <button className="btn btn-info btn-lg" style={{ width:"250px",borderRadius: "20px", backgroundColor : 'white', border : 'none', color : 'red' }} disabled={loading}>Register</button>
            </div>

            <div className="mb-3" style={{ display: 'flex', alignContent: "center", justifyContent: "center" }}>
                <h5 style={{color:"red"}}>{errorMessage}</h5>
            </div>

            </form>

            <div className="mb-3">
            <hr className="border border-danger border-2 opacity-50" style={{ size: "5px", color: "black" }} />
             </div>

             <div className="mb-3">
                <h6>Already have account?<a style={{ textDecoration: "none", color : 'red' }} href="#!">SignIn</a></h6>
             </div>
             </div>
            </div>
        </div>
        </center>
    
    </>)

}

export default Register;