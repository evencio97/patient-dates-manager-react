import React from 'react';
import './Header.css';
import PropTypes from 'prop-types';

function Header({img, name, link}) {
    return(
        <header id="header">
            <img src={process.env.PUBLIC_URL + img} className="header-logo" alt="logo" />
            <a className="header-link" href={link} target="_blank" rel="noopener noreferrer">
                <h1>{name}</h1>
            </a>
        </header>
    );
}

Header.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
}

export default Header;
