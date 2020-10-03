import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import logoTitulo from './logoTitulo.png'

import './Navbar.css'

export default class extends Component {

    constructor(props) {
        super(props)
        
    }


    render() {
        return (
            <Navbar className='navbar'>
                
              <Link to='/'> <img alt="Logotipo" src={logoTitulo} className='logoNav'/> </Link>
            
              <Nav className='navigation'>
                    
                    <Link className='navlink' style={{textDecoration: 'none', color: 'black'}} to="/dogList">Adopta</Link>
                    <Link className='navlink' style={{textDecoration: 'none', color: 'black'}} to="/donation">Ayuda</Link>
                    <Link className='navlink' style={{textDecoration: 'none', color: 'black'}} to="/map">Mapa</Link>
                    <Link className='navlink' style={{textDecoration: 'none', color: 'black'}} to="/stadistics">Datos</Link>
                    <Link className='navlink' style={{textDecoration: 'none', color: 'black'}} to="/signup">Registro</Link>
                    <Link className='navlink' style={{textDecoration: 'none', color: 'black'}} to="/login">Acceder</Link>
                    
                </Nav>
                   
            </Navbar>
        )
    }
}