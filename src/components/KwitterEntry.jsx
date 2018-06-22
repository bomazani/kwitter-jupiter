import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import '../App.css';
import LoginUser from './LoginUser';
import RegisterUser from './RegisterUser';


class KwitterEntry extends Component {

    render() {
        return (
       <Container>     
       <LoginUser/> 
       <br/>
       <RegisterUser/>
       </Container> 
        );
    }
}

export default KwitterEntry;