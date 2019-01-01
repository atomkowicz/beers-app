import * as React from 'react';
import logo from '../assests/img/bier-guru-logo.png';
import '../assests/css/header.css';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="Header">
            <Link to={'/'}><img src={logo} className="App-logo" alt="logo"/></Link>
        </header>
    );
}

export default Header;