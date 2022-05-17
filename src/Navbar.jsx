import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { NavLink, Router } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const displayName = useSelector((state) => state.display)
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className="nav-item nav-link" activeclassname="active" to="/" >Home</NavLink>
                        <NavLink className="nav-item nav-link" activeclassname="active" to="/about" >About</NavLink>
                        <NavLink className="nav-item nav-link" activeclassname="active" to="/catalog" >Catalog</NavLink>
                        <NavLink className="nav-item nav-link" activeclassname="active" to="/todo" >ToDo</NavLink>
                        <NavLink className="nav-item nav-link" activeclassname="active" to="/redux" >Redux</NavLink>
                        <NavLink className="nav-item nav-link" activeclassname="active" to="/github" >GitHub</NavLink>
                        <h5 className="nav-item nav-link" style={{textAlign:"right"}} > Welcome : {displayName}</h5>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
