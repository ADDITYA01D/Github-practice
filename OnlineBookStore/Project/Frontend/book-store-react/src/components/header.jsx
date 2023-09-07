// import { Component } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

// import "../node_modules/bootstrap/dist/js/bootstrap.js";


function Header() {
  const nav = useNavigate();
  const BSearch = () => {
    nav("/search");
  };
  
  const firstName = useSelector((state) => state.user.firstName);
  const lastName = useSelector((state) => state.user.lastName);
  const token = useSelector((state) => state.auth.token);
  console.log(token);

  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary fixed-top header"
        style={{ backgroundColor: "white", paddingBottom: "0px" }}
      >
        <div className="container-fluid" style={{ backgroundColor: "white" }}>
          {/* <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button> */}

          <div
            className="navbar-brand"
            style={{ width: "120px", marginRight: "90px" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="red"
              className="bi bi-book"
              viewBox="0 0 16 16"
            >
              <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
            </svg>
            <Link className="btn" to="/" style={{ fontSize: "20px" }}>
              {" "}
              BookStore
            </Link>
          </div>
          <div className="p-2" style={{ width: "50%" }}>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search For Title, Author, ISBN"
                aria-label="Title, Author, ISBN"
                aria-describedby="basic-addon1"
                style={{ border: "1px solid red" }}
              ></input>
              <button
                type="button"
                className="btn "
                style={{ border: "1px solid red", backgroundColor: "red" }}
                onClick={BSearch}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="white"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                </svg>
              </button>
            </div>
          </div>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="d-flex flex-row-reverse">
              <div className="d-flex align-items-center">
                <div className="dropdown">
                  <a
                    className="btn dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="red"
                      className="bi bi-person-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                      <path
                        fillRule="evenodd"
                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                      />
                    </svg>
                    <span> {firstName + " " + lastName} </span>
                  </a>

                  <ul className="dropdown-menu">
                    
                      
                      {
                        token === null ? (<>
                          <li>
                          <Link to={"/login"} className="dropdown-item">
                        Login
                      </Link>
                      </li>
                      <li>
                      <Link to={"/register"} className="dropdown-item">
                        SignUp
                      </Link>
                    </li></>
                        ) : (
                          <>
                          <li>
                          <Link to={"/userProfile"} className="dropdown-item">
                            Profile
                          </Link>
                          </li>

                          <li>
                            <Link to={"/logout"}
                            className="dropdown-item">
                              Logout
                            </Link>
                          </li>

                          <li>
                            <Link to={"/order"}
                            className="dropdown-item">
                              My Order
                            </Link>
                          </li>

                          <li>
                            <Link to={"/address"}
                            className="dropdown-item">
                              Address
                            </Link>
                          </li>
                          </>
                        )
                      }
                      
                    
                    
                    
                  </ul>
                </div>

                <h2 style={{ color: "GrayText", marginRight: "5px" }}>|</h2>
                <div className="p-2">
                  <Link to="/cart">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="red"
                      className="bi bi-cart3"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                        stroke="red"
                        strokeWidth=".2"
                      />
                    </svg>
                  </Link>
                </div>
                <h2 style={{ color: "GrayText", marginRight: "5px" }}>|</h2>
                <div className="p-2">
                  <Link to="/address">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      fill="red"
                      className="bi bi-heart"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
                        stroke="red"
                        strokeWidth=".2"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* <nav className="navbar fixed-top" style={{marginTop:"50px", color:"red"}}>

        <div style={{width:"100%", backgroundColor:"white"}}>

    
        </div>
        <hr style={{width:"100%"}}></hr>
    </nav> */}
      <div>
        <br />
      </div>
    </>
  );
}

export default Header;
