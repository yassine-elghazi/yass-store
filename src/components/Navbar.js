import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>


            <nav className="navbar bg-light fixed-top shadow">
                <div className="container-fluid container">
                    <NavLink to="/">
                        <img src="/cover.png" alt="logo" style={{ height: "50px" }} />
                    </NavLink>
                    <input list="datalistOptions" style={{marginLeft:"750px"}} id="exampleDataList" placeholder="Type to search..." />
                    <button className="navbar-toggler" type="button">
                        <i className="fa fa-shopping-cart"></i>
                    </button>
                </div>
            </nav>


        </div>
    )
}

export default Navbar;