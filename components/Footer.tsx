import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import styles from '../styles/Home.module.scss';

// Icons
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

const Footer = () => {
    return (
        <footer className="bg-primary text-white">
            <Container className={`font-weight-bold text-center py-4 ${styles.letterSpacing}`}>
                <Row className="align-items-center">
                    <Col md={6} className={'text-left py-2'}>
                        <Row>
                            <Col xs={6} sm={6} md={6}>
                                <Link href="/" passHref>
                                    <div className={`${styles.pointer} ${styles.fontSizeSm} py-1`}>Home</div>
                                </Link>
                            </Col>
                            <Col xs={6} sm={6} md={6}>
                                <Link href="/resources" passHref>
                                    <div className={`${styles.pointer} ${styles.fontSizeSm} py-1`}>Resources</div>
                                </Link>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6} sm={6} md={6}>
                                <Link href="/about" passHref>
                                    <div className={`${styles.pointer} ${styles.fontSizeSm} py-1`}>About</div>
                                </Link>
                            </Col>
                            <Col xs={6} sm={6} md={6}>
                                <Link href="/contact" passHref>
                                    <div className={`${styles.pointer} ${styles.fontSizeSm} py-1`}>Contact</div>
                                </Link>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6} sm={6} md={6}>
                                <Link href="/permission-policy" passHref>
                                    <div className={`${styles.pointer} ${styles.fontSizeSm} py-1`}>Permission Policy</div>
                                </Link>
                            </Col>
                            <Col xs={6} sm={6} md={6}>
                                <Link href="/privacy-policy" passHref>
                                    <div className={`${styles.pointer} ${styles.fontSizeSm} py-1`}>Privacy Policy</div>
                                </Link>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='text-left pb-2 pt-4'>
                                <h6>
                                    Copyright &copy; 2021 The Coding Cavalry
                                </h6>
                            </Col>
                        </Row>
                    </Col>
                
                    <Col md={6} className={`py-2`}>
                        <Row className=" pb-1">
                            <Col>
                                <h3 className="pb-2">Follow Us</h3>
                            </Col>
                        </Row>
                        <Row className="pb-2">
                            <Col>
                                <a href="https://twitter.com/CavalryCoding" target="_blank" rel="noreferrer" className="btn btn-primary rounded-circle" role="button">
                                    <TwitterIcon/>
                                </a>
                    
                                <a href="https://www.youtube.com/channel/UC5BMmH2DvXboFMSiUBquCww/featured" target="_blank" rel="noreferrer" className="btn btn-primary rounded-circle mx-4" role="button">
                                    <YouTubeIcon/>
                                </a>

                                <a href="https://www.linkedin.com/in/davidlindnerjr/" target="_blank" rel="noreferrer" className="btn btn-primary rounded-circle" role="button">
                                    <LinkedInIcon/>
                                </a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;
