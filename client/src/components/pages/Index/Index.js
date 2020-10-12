import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import { Link } from 'react-router-dom'

import Vivus from 'vivus'
import ReactVivus from 'react-vivus'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'

import './Index.css'
import buddy from './Buddy.png'
import footprint from './footprint.svg'
import animatedFootprint from './footprint_animated.svg'
import cat from './cat.svg'
class Index extends Component {

    constructor() {
        super()
    }

    componentDidMount() {
        
        new Vivus('cat', { duration: 200, file: footprint, animTimingFunction: Vivus.EASE }, null)
        console.log(cat)

    }

    render() {
        return (
            <>
                <Container className='section1'>
                    
                    <Fade clear>
                
                    <Row>
                    
                        <Col>
                        
                            <Carousel className="carrous">
                            
                                <Carousel.Item >
                                
                                    <img
                                        className="d-block w-100 img-dog carousel-img"
                                        src = "https://scx2.b-cdn.net/gfx/news/hires/2020/dog.jpg"
                                        alt="First slide"
                                    />

                                </Carousel.Item>
                                    
                                <Carousel.Item >
                                
                                    <img
                                        className="d-block w-100 img-dog carousel-img"
                                        src = "https://i.pinimg.com/originals/2f/fc/61/2ffc61b482dc43ed094272921e64ca22.jpg"
                                        alt="Second slide"
                                    />

                                </Carousel.Item>

                                <Carousel.Item >
                                
                                    <img
                                        className="d-block w-100 img-dog"
                                        src="https://www.redaccionmedica.com/images/destacados/coronavirus-perros-no-necesitan-mascarillas-porque-no-se-contagian--5615.jpg"
                                        alt="Third slide"
                                    />
                                
                                </Carousel.Item>

                            </Carousel>

                        </Col>
                        

                    </Row>

                    <p style={{ marginBottom: '60px', fontWeight: '200' }}>No todas las personas saben cómo amar a un perro, pero todos los perros saben cómo amar a una persona</p>

                        <Link to={'/dogList'} style={{ textDecoration: 'none', color: 'black' }} className='button-adopta'>¡Adopta!</Link>
                        
                    </Fade>

                </Container>

                <Container fluid className='section2'>
                
                    <Fade cascade>
                
                        <Row className='justify-content-center align-items-center'>
                    
                            <Col md={5}>
                        
                                <p style={{ width: '80%' }}>"Podemos juzgar el corazón de un hombre por cómo trata a los animales"<span style={{ marginTop: '20px', display: 'block' }}>Immanuel Kant</span></p>
                        
                            </Col>

                            <Col md={2}>
                                
                                 {/* <svg version = "1.0"
                                 id = "footprint"
                                 xmlns = "http://www.w3.org/2000/svg"
                                 
                x="0px" y="0px" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" xmlSpace="preserve">
                <path d="M1725 4906 c-242 -53 -426 -227 -529 -500 -68 -179 -90 -437 -53
-601 90 -395 277 -686 513 -797 60 -28 82 -33 169 -36 118 -5 182 10 271 64
76 45 115 84 169 164 102 154 158 350 186 653 15 164 7 409 -17 497 -69 259
-233 469 -423 541 -70 26 -202 33 -286 15z m237 -232 c79 -40 148 -117 201
-225 80 -163 95 -262 78 -509 -25 -351 -88 -558 -205 -676 -81 -80 -176 -103
-275 -65 -67 25 -115 64 -181 147 -98 123 -179 303 -221 488 -56 249 24 567
184 730 93 94 181 134 300 135 54 1 78 -4 119 -25z" />
                                </svg> */}
                                
                                  <svg version = "1.1"
                                 id = "cat"
                                 xmlns = "http://www.w3.org/2000/svg"
                                 
                x="0px" y="0px" viewBox="0 0 100.25 100.25" enableBackground="new 0 0 100.25 100.25" xmlSpace="preserve">
                <path d="M39.29,54.739c0,0.828,0.671,1.5,1.5,1.5s1.5-0.672,1.5-1.5c0-4.136-3.589-7.5-8-7.5s-8,3.365-8,7.5
		c0,0.828,0.671,1.5,1.5,1.5s1.5-0.672,1.5-1.5c0-2.481,2.243-4.5,5-4.5S39.29,52.258,39.29,54.739z" />
            </svg>

                                {/* <svg id='footprint'></svg> */}

                               {/* <img src={animatedFootprint} alt='Dog footprint' /> */}
           
                                {/* <ReactVivus id='footprint' option={{animTimingFunction: 'EASE', type: 'oneByOne', file: footprint, onReady: console.log, }} style={{ height: '400px', width: '400px' }} callback={console.log}/> */}

                            </Col>

                        </Row>
                    
                    </Fade>

                </Container>

                <Container fluid>
                
                    <Row className='justify-content-center'>
                    
                        <Col md={7} style={{marginRight: '8%'}}>

                            <Fade left>

                                <img alt="Dog background" src={buddy} className='background' />
                            
                            </Fade>
                        
                        </Col>
                    
                    </Row>

                </Container>

            </>
        )
    }
}

export default Index