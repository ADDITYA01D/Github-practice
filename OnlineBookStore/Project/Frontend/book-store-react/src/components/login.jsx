import { Component, useState } from "react";
import "../styles/login.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser as loginUserApi } from "../services/user";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
import { login} from "../features/authSlice";
import { setUser } from "../features/userSlice";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const loginUser = async () => {
    if (email.length == "") {
      toast.error("Please enter email");
    } else if (password.length == "") {
      toast.error("Please enter password");
    } else {
      // call register api
      const response = await loginUserApi(email, password);
      console.log(response);
      // parse the response
      if (response["status"] === 200) {
        console.log(response);

        const token = response["data"]["token"];
        const decodedToken = jwtDecode(token);
        
        console.log(decodedToken);

        dispatch({type:login,
          payload:{
            token: response.data.token
          }
        })
        
        dispatch({type:setUser, 
          payload:{
            id : response.data.id,
            firstName: response.data.firstName,
            lastName: response.data.lastName,
            email: response.data.email,
            mobile: response.data.mobile,
            role: response.data.role
          }
        });



        toast.success(`Welcome to bookstore.com, ${decodedToken.sub}!`);
        if(response.data.role === "ROLE_ADMIN") {
          navigate("/admin");
        } else if(response.data.role === "ROLE_CUSTOMER") {
          navigate("/");
        }
      } else if(response.status === 400) {
        toast.error(response.data.message);
      } 
      else {
        toast.error("Invalid user name or password");
      }
    }
  };

  return (
    <div className="main" style={{ paddingTop: "100px" }}>
      <div className="sub-main" style={{ border : "5px solid red", backgroundColor : '#ECEFF1'}}>
        <div>
          <div className="imgs" >
            <div className="container-image">
              <img
                src="/image/mainBook.png"
                alt="profile"
                className="profile"
              />
            </div>
          </div>
          <div>
            <h1>Login</h1>
            <div>
              <img
                src="/image/goodemail.png"
                alt="email"
                className="email"
                style={{ paddingLeft: "5px" }}
              />
              <input
                className="input1 name"
                type="text"
                placeholder="Email id"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="second-input">
              <img src="/image/pass.jpeg" alt="pass" className="email" />
              <input
                type="password"
                placeholder="Password"
                className="input1 name"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="login-button">
              <button className="button1" onClick={loginUser} style={{backgroundColor : 'white', color : 'red'}}>
                Login
              </button>
            </div>

            <p className="link">
              <a href="#">Forgot password ?</a> Or
              <Link to="/signup"> Register </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
