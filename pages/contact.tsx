import React from 'react';
import styles from '../styles/Home.module.scss';
import Link from 'next/link';
import { Container, Row, Col, Button } from 'react-bootstrap';

const contact = () => {
    return (
        <Container>
            <Row className={`py-5`}>
                    <Col md={8}>
                        <Link href="/" passHref>
                            <Button className="btn-light btn-link">
                                RETURN HOME
                            </Button>
                        </Link>
                    </Col>
                </Row>
                <Row className={`text-center pb-5`}>
                    <Col md={12}>
                        <div>
                            <h1 className={`font-weight-bold display-4 ${styles.westernFont}`}>Get In Contact With The Cavalry</h1>
                        </div>
                    </Col>
                </Row>
                <Row className="pb-5 text-left">
                    <Col md={2}></Col>
                    <Col md={8}>

                        <h2 className={`py-2 text-primary ${styles.westernFont}`}><span className='text-dark'>Send us an email - </span>thecodingcavalry@gmail.com</h2>

                        <a href="https://www.linkedin.com/in/davidlindnerjr/" target="_blank" rel="noreferrer">
                            <h2 className={`py-2 text-primary ${styles.westernFont}`}><span className='text-dark'>Find the author on LinkedIn - </span>David Lindner Jr</h2>
                        </a>
                        <a href="https://www.youtube.com/channel/UC5BMmH2DvXboFMSiUBquCww" target="_blank" rel="noreferrer">
                            <h2 className={`py-2 text-primary ${styles.westernFont}`}><span className='text-dark'>Check us out on YouTube - </span>The Coding Cavalry</h2>
                        </a>
                        <a href="https://twitter.com/CavalryCoding" target="_blank" rel="noreferrer">
                            <h2 className={`py-2 text-primary ${styles.westernFont}`}><span className='text-dark'>Get the latest updates on Twitter- </span>The Coding Cavalry</h2>
                        </a>
                    </Col>
                    <Col md={2}></Col>
                </Row>
        </Container>
    )
}

export default contact;
