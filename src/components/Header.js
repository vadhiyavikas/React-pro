import React from 'react'
import { Link } from 'react-router-dom'


export const Header = () => {
    return (
        <div>
            <header id="header" className="d-flex align-items-center">
                <div className="container d-flex align-items-center justify-content-between">
                    <h1 className="logo">ToDo App</h1>
                    {/* Uncomment below if you prefer to use an image logo */}
                    {/* <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
                    <nav id="navbar" className="navbar">
                        <ul>
                        <Link to='/'>Home</Link>
                            <Link className="nav-link scrollto" to='/tasks'>Task</Link>
                            <li><Link className="nav-link scrollto" to="/task">Add Task</Link></li>
                            <li><a className="nav-link scrollto " href="#portfolio">Features</a></li>
                           <Link to='/signin'>Sign In</Link>
                            <Link to='/signUp'>Sign Up</Link>
                            <li className="button"><Link to="/About">About </Link>

                            
                                {/* <ul> */}
                                    {/* <li><a href="#">Drop down 1</a></li> */}
                                    {/* <li className="dro"><a href="#"><span></span> <i className="bi bi-chevron-right" /></a> */}
                                        {/* <ul>
                                            <li><a href="#">Deep Drop Down 1</a></li>
                                            <li><a href="#">Deep Drop Down 2</a></li>
                                            <li><a href="#">Deep Drop Down 3</a></li>
                                            <li><a href="#">Deep Drop Down 4</a></li>
                                            <li><a href="#">Deep Drop Down 5</a></li>
                                        </ul> */}
                                    {/* </li> */}
                                    {/* <li><a href="#">Drop Down 2</a></li> */}
                                    {/* <li><a href="#">Drop Down 3</a></li> */}
                                    {/* <li><a href="#">Drop Down 4</a></li> */}
                                {/* </ul> */}
                            </li>
                            <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle" />
                    </nav>{/* .navbar */}
                </div>
            </header>{/* End Header */}



        </div>
    )
}







