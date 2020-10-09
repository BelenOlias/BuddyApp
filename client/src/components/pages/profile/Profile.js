import React, { Component } from 'react'
import dogsService from '../../../service/dogs.service'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import authService from '../../../service/auth.service'
import "./Profile.css"
import perfilLogo from './perfil.png'
import Modal from 'react-bootstrap/Modal'
import { Link } from 'react-router-dom'
import Newdog from './newDog/NewDog'
import ProDogDetails from './Pro-dog-details'
import ProDogCard from './Pro-dog-card'
class Profile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            dogs: [],
            user: undefined,
            showModal: false
        }
            this.dogsService = new dogsService()
        
    }
        componentDidMount = () => this.loadDogs()
    
    
        loadDogs() {
            this.dogsService
                .getDogs()
                .then(response => this.setState({ dogs: response.data }))
                .catch(error => console.log('Error!', error))
            
        }
    handleformUser() {
        if (this.props.loggedInUser) {
            if (this.props.loggedInUser.associationName)
                return true
            else
                return false
        }
    }
    handleModal = showModal => this.setState({ showModal })
    render() {

        return (
            <>
                <Container fluid className="container">

                <h1 className="profile push">Perfil</h1>

                {this.handleformUser() == true && <Container fluid >
                    
                    <Row style={{textAlign: 'left'}} >
                        
                        <Col>
                            
                            <img className="logo-perfil" src={perfilLogo} />

                            <h2 >Bienvenido {this.props.loggedInUser.username}</h2>

                            <h4 >Eres el administrador de "{this.props.loggedInUser.associationName}"</h4>

                            <p>Te uniste el {this.props.loggedInUser.createdAt}</p>

                            <p>Última actualizacion de tu perfil: {this.props.loggedInUser.updatedAt} </p>

                        </Col>

                    </Row>

                    <Container fluid >

                        <h2>Lista de perretes disponibles</h2>
                        
                        <Button onClick={() => this.handleModal(true)} style={{ marginBottom: '20px' }} variant="dark" size="sm">Nuevo perro</Button>

                        <Row className='justify-content-around'>

                        {this.state.dogs.map(elm => <ProDogCard key={elm._id} {...elm} />)}

                        </Row>

                        <Modal show={this.state.showModal} onHide={() => this.handleModal(false)}>
                            
                            <Modal.Header closeButton>
                                
                                <Modal.Title >Añade un perro</Modal.Title>

                            </Modal.Header>

                            <Modal.Body >
                                
                                <Newdog setTheUser={this.props.setTheUser} loggedInUser={this.props.loggedInUser} closeModal={() => this.handleModal(false)} />

                            </Modal.Body>

                        </Modal>

                        <Row className='justify-content-around'>

                        </Row>

                    </Container>

                </Container>}

                {this.handleformUser() == false && <Container fluid >
                    
                    <Row style={{textAlign: 'left'}} >
                        
                        <Col>
                            
                            <img className="logo-perfil" src={perfilLogo} />

                            <h2>Bienvenido {this.props.loggedInUser.username}</h2>

                            <h4 >Eres el administrador de "{this.props.loggedInUser.associationName}"</h4>

                            <p>Te uniste el {this.props.loggedInUser.createdAt}</p>

                            <p>Última actualizacion de tu perfil: {this.props.loggedInUser.updatedAt} </p>

                        </Col>

                    </Row>

                </Container>}

                <Row>
                    
                    <Link to={'/'} style={{ textDecoration: 'none', color: 'black' }} className='button'>Volver</Link>
                
                </Row>

                </Container>
            </>

        )
    }
}

export default Profile