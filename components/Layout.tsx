import React from 'react';
import { Container } from 'react-bootstrap';

// Component
import Nav from './Nav';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <>
            <Nav/>
                { children }   
            <Footer/>
        </>
    )
}

export default Layout;
