import React, { Component } from 'react'

import Toast from 'react-bootstrap/Toast'

class Alert extends Component {

    constructor() {
        super()
        this.state = {
            visible: true
        }
    }

    render() {
        return (

            <Toast onClose={() => this.setState({ visible: false })} show={this.state.visible} autohide delay={2000} style={{ position: 'fixed', top: '15%', left: '45%' }} >
                
                <Toast.Header>

                    <p>{this.props.title}</p>

                </Toast.Header>
                
                <Toast.Body>{this.props.text}</Toast.Body>

            </Toast>
        )
    }
}

export default Alert 