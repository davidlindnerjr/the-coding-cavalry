import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';

const about = () => {
    return (
        <>
            <Head>
                <title>The Coding Cavalry | About The Author</title>
                <script data-ad-client="ca-pub-2840864065190538" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
            </Head>
            <Container className="pb-5">
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
                        <Col md={12} >
                            <div>
                                <h1 className={`font-weight-bold display-4 ${styles.westernFont}`}>Get To Know The Cavalry</h1>
                            </div>
                        </Col>
                    </Row>
                    <Row className="pb-5">
                        <Col  sm={12} md={12} lg={12} xl={8} className={`${styles.fontSizeMd}`}>
                            <p>
                                Hello!
                            </p>
                            <p>
                                Welcome to The Coding Cavalry! My name is David Lindner. I am a Full Stack Web Developer and Software Engineer. I got my start in programming
                                during college where my major was Computer Science. I ended up graduating with an Asscociates in Computer Science, Math and Science, and Social Sciences.
                                After my college career I attended an outsanding coding bootcamp, the UC Davis Coding Bootcamp. That is where my passion for programming really started. During
                                the bootcamp is where I picked up all of my Web Dev knowledge. I went from not knowing what HTML was to becoming a Full Stack Web Devloper with the MERN Stack
                                (MongoDB, Express, React, and Node.js). After my completion of the course I went on to becoming a Rust Backend Engineer at an awesome development firm.
                            </p>
                            <p>
                                I plan on writing about helpful programming tips, new technologies, and general programming topics that I find to be super interesting. My hopes in my 
                                writing is to help others wth similar struggles that I had during my own learning, and to have fun learning more about what is out there and sharing with others whom
                                also enjoy programming. 
                            </p>
                            <p>
                                - David Lindner
                            </p>
                        </Col>
                        <Col sm={12} md={12} lg={12} xl={4}>
                            <Image src="/david-lindner.jpg" className={`${styles.footerLogoSize} d-none d-md-block shadow-lg bg-white rounded`} alt="author picture"/>
                        </Col>
                    </Row>
            </Container>
        </>
    )
}

export default about;