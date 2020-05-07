import React from 'react';
import './Header.css';

function Header(props) {
    return(
        <header id="header">
            <img src={process.env.PUBLIC_URL + props.img} className="header-logo" alt="logo" />
            <a className="header-link" href={props.link} target="_blank" rel="noopener noreferrer">
                <h1>{props.name}</h1>
            </a>
        </header>
    );
}

export default Header;
