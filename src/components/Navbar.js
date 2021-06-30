import React from 'react';
import {NavLink,Link} from 'react-router-dom';

export default function Navbar() {
    return (
        <div >
            <nav className="navbar navbar-main navbar-expand-lg navbar-dark bg-primary">
                <div className="container">
                    <a className="navbar-brand" href="#">Categories</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <NavLink className="nav-link" aria-current="page" to="/Fasion">Fashion</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/supermarket">Supermarket</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/electronics">Electronics</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/kids">Baby &amp; Kids</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/furniture">Home &amp; Furniture</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/sports">Sports &amp; Fitness</NavLink>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
