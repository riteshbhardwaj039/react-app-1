import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import logo from '../images/logo-green.png';
import search from '../images/search-icon.png';
import gitpull from '../images/git-pull.png';
import eye from '../images/eye.png';

const Navbar = () => {
    return (
        <div className='container position-relative '>
            {/* <div class="header d-flex justify-content-between">
                <div className='logo'>
                    <img src={logo} alt='logo' />
                </div> 
                <div class="request-and-price">
                    <ul>
                        <li><img src={gitpull} /><a href="#"><span>Request a Service</span></a></li>
                        <li><img src={eye} /><a href="#"><span>See Vendors and Price</span></a></li>
                    </ul>
                </div>
                <div className='menu-buttons'>
                    <a href="#">Submit a Vendor Application</a>
                    <a href="#">Create a Client Account</a>
                </div>
                <div className='search-and-signin'>
                    <div className="menu-search">
                        <img src={search} />
                        <button>Sign Into Account</button>
                    </div>
                </div>
            </div> */}
            <nav class="navbar navbar-expand-xl">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <div className='logo'>
                            <img src={logo} alt='logo' />
                        </div> 
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                            <div class="request-and-price">
                                <ul>
                                    <li><img src={gitpull} /><a href="#"><span>Request a Service</span></a></li>
                                    <li><img src={eye} /><a href="#"><span>See Vendors and Price</span></a></li>
                                </ul>
                            </div>
                            </li>
                            <li class="nav-item">
                                <div className='menu-buttons'>
                                    <a href="#">Submit a Vendor Application</a>
                                    <a href="#">Create a Client Account</a>
                                </div>
                            </li>
                            <li class="nav-item">
                                <div className='search-and-signin'>
                                    <div className="menu-search">
                                        <img src={search} />
                                        <button>Sign Into Account</button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar; 
