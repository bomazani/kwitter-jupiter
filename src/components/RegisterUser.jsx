import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../actions/registerUserAction';
import '../App.css';
import { Container,Button, Form, Label } from 'semantic-ui-react'

class RegisterUser extends Component {
    state = {
        userDetails: {
                      username: "",
                      password: "",
                      confirmPassword:"",
                      displayName: ""
                    }
    }
    

    handleOnChange = (event) => {
        const field = event.target.name;
        const userDetails = this.state.userDetails;
        userDetails[field] = event.target.value;
        this.setState({
            userDetails
        });
    }
    
    handleOnSubmit = (event) => {
        event.preventDefault();
        const name = this.state.userDetails.username.trim();
        const password = this.state.userDetails.password.trim();
        const confirmPassword = this.state.userDetails.confirmPassword.trim();
        const displayName = this.state.userDetails.displayName.trim();
        
        if ( name !== '' && password !== '' && confirmPassword !== '' && displayName !== '' && password === confirmPassword) {
            this.props.dispatch(registerUser(this.state.userDetails));
        }
    }

    render() {
        return (
            <Container>
             <hr/>   
            <Form onSubmit={this.handleOnSubmit}>
                <br/>
                <Label color="yellow">New user? Register here.</Label>
                <br/>
                <br/>
                <Form.Field inline>
                    <Form.Input
                        name="username"
                        type="text"
                        
                        label="Username"
                        onChange={this.handleOnChange}
                        value={this.state.userDetails.username} autoFocus
                    /> 
                </Form.Field>
                <Form.Field inline>  
                    <Form.Input 
                        name="password"
                        type="password"
                        label="Password" 
                        
                        onChange={this.handleOnChange}
                        value={this.state.userDetails.password}
                    />
                </Form.Field>
                <Form.Field inline> 
                    <Form.Input 
                        name="confirmPassword" 
                        type="password"
                        label="Confirm Password" 
                        onChange={this.handleOnChange}
                        value={this.state.userDetails.confirmPassword} 
                    /> 
                </Form.Field>
            
                <Form.Field inline>   
                    <Form.Input 
                        name="displayName" 
                        type="text"
                        label="Display Name"     
                        onChange={this.handleOnChange}
                        value={this.state.userDetails.displayName}
                    /> 
                </Form.Field>
                <br/>
                <Button type='submit' color="teal">Signup</Button>
                <br/>
            </Form>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state,
        error: '',
        message: ''
    }
}

export default connect(mapStateToProps)(RegisterUser);