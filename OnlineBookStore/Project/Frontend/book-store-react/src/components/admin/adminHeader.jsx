import { useNavigate, Link } from 'react-router-dom';

import React from "react";
import { useSelector } from 'react-redux';

function AdminHeader() {

    const userId = useSelector((state) => state.user.id);
        const firstName=useSelector((state)=>state.user.firstName);
        const lastName=useSelector((state)=>state.user.lastName);

    return (
        <>
            <nav class="navbar navbar-dark bg-dark fixed-top">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <h1 class="navbar-brand">Welcome {firstName} !</h1>
                    <Link className="btn btn-danger" to="/logout">LOGOUT</Link>
                    <div class="offcanvas offcanvas-start text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">TASK MANAGER</h5>
                            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li class="nav-item">
                                    <Link class="nav-link active" aria-current="page" to="/admin">Home</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="#">Manage Orders</Link>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Manage Books
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-dark">
                                        <li><Link class="dropdown-item" to="/adminAddBook">Add Book</Link></li>
                                        <hr class="dropdown-divider"/>
                                        <li><Link class="dropdown-item" to="/adminShowBooks">Update Book</Link></li>
                                        <hr class="dropdown-divider"/>
                                        <li><Link class="dropdown-item" to="/adminShowBooks">Delete Book</Link></li>
                                        <li>
                                            <hr class="dropdown-divider"/>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            {/* <form class="d-flex mt-3" role="search">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                    <button class="btn btn-success" type="submit">Search</button>
                            </form> */}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default AdminHeader;