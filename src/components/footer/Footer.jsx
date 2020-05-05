import React from 'react';
import './Footer.css';

const Footer = ({year}) => ( 
        <footer id="footer">
            <p>Todos los derechos reservados &copy;{year}</p>
        </footer>
    );
 
export default Footer;
