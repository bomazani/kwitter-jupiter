import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions';
import '../App.css';
import { Container,Header, Icon, Button, Form } from 'semantic-ui-react'

class LoginUser extends Component {
    state = {
        credentials: {username: '', password: ''}
    }

    handleOnChange = (event) => {
        const field = event.target.name;
        const credentials = this.state.credentials;
        credentials[field] = event.target.value;
        this.setState({
            credentials: credentials
        });
    }
    
    handleOnSubmit = (event) => {
        event.preventDefault();
        const name = this.state.credentials.username.trim();
        const pword = this.state.credentials.password.trim();
        
        if (name !== '' && pword !== '') {
            this.props.dispatch(loginUser(this.state.credentials));
        }
    }

    render() {
        return (
        <Container >
            <Form onSubmit={this.handleOnSubmit}>
                <br/>
                <Header as='h2'> 
                    <Icon name='users' color="teal"/>
                    <Header.Content>Kwitter</Header.Content>
                </Header>
                <Form.Field inline>       
                    <Form.Input 
                        name="username" 
                        type="text"
                        label="Username"
                        
                        onChange={this.handleOnChange}
                        value={this.state.credentials.username} autoFocus
                    /> 
                </Form.Field>
                <Form.Field inline> 
                    <Form.Input 
                        name="password"
                        type="password"
                        label="Password"
                       
                        onChange={this.handleOnChange}
                        value={this.state.credentials.password}
                    />
                </Form.Field>          
                <br/>
                <Button type="submit" color="teal">Login</Button>
                <br/>  
            </Form>
        </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        username: state.username,
        token: '',
        isLoggedIn: state.isLoggedIn,
        error: '',
        message: '',
        isRegister: state.isRegister
    }
}

export default connect(mapStateToProps)(LoginUser);