import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
        
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to='./' className="navbar-brand" href="#">useContext</Link>
                
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink activeClassName='active' exact className='nav-link' to='./'> Home </NavLink>
                        <NavLink activeClassName='active' exact className='nav-link' to='./about'> About </NavLink>
                        <NavLink activeClassName='active' exact className='nav-link' to='./login'> Login </NavLink>
                    </div> 
                </div>
            </div>
        </nav>
    )
}
