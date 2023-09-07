import { useEffect, useState } from "react";
import { useSelector } from "react-redux";


function MyProfile() {
    
    const firstName = useSelector((state) => state.user.firstName);
    const lastName = useSelector((state) => state.user.lastName);
    const email = useSelector((state) => state.user.email);
    const mobile = useSelector((state) => state.user.mobile);
    const id = useSelector((state) => state.user.id);

    const [profile, setProfile] = useState({
        firstName: "",
        lastName : "",
        email: "",
        mobile : ""
    });

    useEffect(() => {
        console.log("isDefault state - " + profile);
    },[profile])

    const handleChange = (e) => {
        const {name, value} = e.target;

        setProfile((prevState => {
            return {
                ...prevState,
                [name]: value
            }
        }))
    }

    console.log(profile);

    return (
        <>
            <div class="container-fluid d-flex align-items-center justify-content-center bg-gradient" style={{paddingTop:"120px"}}>
                <div className='table-responsive p-3 mb-5 bg-body-tertiary rounded w-50   '  style={{border : "2px solid red", boxShadow: "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",}}>
                    <h6 class="display-6   fw-bold   text-center" style={{color : 'red'}}>My Profile</h6>
                    <div className='text-success'>
                        <hr/>
                    </div>
                    <br/><br/>

                    <div class="mb-3 row">
                        <label for="staticName" class="col-sm-2 col-form-label">First Name</label>
                        <div class="col-sm-10">
                            <input 
                                type="text" 
                                class="form-control border border-success-subtle" 
                                id="staticName" 
                                value={firstName}
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                    </div>

                    <div class="mb-3 row">
                        <label for="staticUsername" class="col-sm-2 col-form-label">Last Name</label>
                        <div class="col-sm-10">
                            <input type="text" 
                                class="form-control border border-success-subtle" 
                                id="staticUsername" 
                                value={lastName}
                                onChange={(e) => handleChange(e)}                            />
                        </div>
                    </div>
                    
                    <div class="mb-3 row">
                        <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-10">
                            <input type="text" 
                                class="form-control border border-success-subtle" 
                                id="staticEmail" 
                                value={email} 
                                onChange={(e) => handleChange(e)}                            />
                        </div>
                    </div>

                    {/* <div class="mb-3 row">
                        <label for="staticPassword" class="col-sm-2 col-form-label">Password</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control border border-success-subtle" id="staticPassword" value="***********" />
                        </div>
                    </div> */}

                    <div class="mb-3 row">
                        <label for="staticMobile" class="col-sm-2 col-form-label">Mobile</label>
                        <div class="col-sm-10">
                            <input type="text" 
                                class="form-control border border-success-subtle" i
                                d="staticMobile" 
                                value={mobile} 
                                onChange={(e) => handleChange(e)}                            />
                        </div>
                    </div>

                    {/* <div class="mb-3 row">
                        <label for="staticShippingAddress" class="col-sm-2 col-form-label">Shipping Address</label>
                        <div class="col-sm-10">
                            <textarea class="form-control border border-success-subtle" id="staticShippingAddress" rows="3" value="Yashwin Society, *************** *********************, **************, ***************** **********************, ***************************************,  Hinjewadi, Pune, 411057" ></textarea>
                            {/* <input type="text" class="form-control-plaintext text-wrap" id="staticShippingAddress" value="Sunbeam Pune, ***************************************************************************, Hinjewadi, Pune, 411057" readonly/> 
                        </div>
                    </div> */}
                    <br/>
                    <center>
                    <div className='align-items-center justify-content-center'>
                    <button type="button" className="btn btn-danger">
                        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
                        <span class="material-symbols-outlined">Edit</span>
                    </button>
                    </div>
                    </center>
                    {/* <div class="mb-3 row">
                        <label for="staticPreferredGenres" class="col-sm-2 col-form-label">Preferred Genres</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control border border-success-subtle" id="staticPreferredGenres" value="email@example.com" readonly/>
                        </div>
                    </div> */}
                </div>

                
            </div>            

        </>            
    );
}

export default MyProfile;