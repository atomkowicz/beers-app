import * as React from 'react';
import logo from '../assests/img/bier-guru-logo.png';

const Header = () => {
    return (
        <header className="Header">
            <img src={logo} className="App-logo" alt="logo"/>
        </header>
    );
}

export default Header;