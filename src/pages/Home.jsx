import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProposeForm from '../components/ProposeForm';
import Image from '../static/images/hero.svg';
import Image2 from '../static/images/logo2.png';
import Image3 from '../static/images/logo1.png';


const Home = ({ className = '' }) => (
    <header className={`hero ${className}`}>
        <Container>
            <Row className="hero_content justify-content-between py-5">
                <Col md={7} lg={6} className="hero_text-wrapper">
                    <div className="hero_text">
    

                        <h1 className="hero_text-title mb-3">
                        Scared to <font className="text-danger">Express</font> Your Feelings?
                        </h1>
                        <p className="hero_text-description">
                        Don't worry, I'm here to help. Enter your <span style={{ color: '#ff0000' }}>Valentine's name</span> and generate a personalized proposal link."
                        </p>

                        <ProposeForm className="hero_text-form mt-4 mt-md-5" />
                        {/* <p className="hero_credit">
                            Made with Love {' '}
                            <a
                                href="https://rayq-mine.netlify.app"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                @rayqrohit
                            </a>
                        </p> */}
                    </div>
                </Col>
                <Col md={5} className="hero_media-wrapper">
                    <div className="hero_media">
                        <img
                            src={Image3}
                            alt="Afraid To Propose Someone?"
                            className="hero_media-img img-fluid"
                        />
                    </div>
                </Col>
            </Row>
        </Container>
    </header>
);

export default Home;
