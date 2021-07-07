import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.scss';
import { Navbar, Nav, Container } from 'react-bootstrap';

// Components
// import Search from './Search.js';

const Header = () => {
    return (
        <header>
            <Navbar bg="white" expand="lg" collapseOnSelect>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav" className="text-center">
                        <Nav className={`m-auto ${styles.navbarNav}`}>
                            <Nav.Link className={`mx-5`}>
                                <Link href="/">
                                    <h2 className={`${styles.westernFont} font-weight-bold text-primary`}>Home</h2>
                                </Link>
                            </Nav.Link>
                            <Nav.Link className={`mx-5 `}>
                                <Link href="/resources">
                                    <h2 className={`${styles.westernFont} font-weight-bold text-primary`}>Resources</h2>
                                </Link>
                            </Nav.Link>
                            <Nav.Link className={`mx-5 `}>
                                <Link href="/about">
                                    <h2 className={`${styles.westernFont} font-weight-bold text-primary`}>About</h2>
                                </Link>
                            </Nav.Link>
                            <Nav.Link className={`mx-5 `}>
                                <Link href="/contact">
                                    <h2 className={`${styles.westernFont} font-weight-bold text-primary`}>Contact</h2>
                                </Link>
                            </Nav.Link>
                            {/* <Route render={({ history }) => <Search history={history} />} /> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;