import * as React from 'react';
import {Link} from "react-router-dom";
import '../assests/css/header.css';
import logo from '../assests/img/app-logo.png';

const Header = () => {
    return (
        <header className="Header">
            <Link to={'/'}><img src={logo} className="App-logo" alt="logo"/></Link>
        </header>
    );
}

export default Header;