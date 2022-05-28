import React from 'react';
import logo from '../../assets/img/KFC-Logo.png';
import './header.css';
import Menu from '../Menu'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className="headerWrapper">
      <div className="logo">
        <Link to="/"><img width="150px" src={logo}alt="" /></Link>
      </div>
      <div className="auth-link">
        <ul>
          <li><Link to=""><i className="bi bi-geo-alt-fill"></i> Store Locator</Link></li>
          <li><Link to="/login"><i className="bi bi-person-fill"></i> Signin/Register</Link></li>
          <li><Link to=""> My Account</Link></li>
          <li><Link to=""> Logout</Link></li>
        </ul>
      </div>
    </div>
    <Menu/>
    </>
  )
}

export default Header