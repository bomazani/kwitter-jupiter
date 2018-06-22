import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { loginUser } from '../actions';
import '../App.css';
// import { Header, Icon, Button, Form, Grid } from 'semantic-ui-react'

class MessageList extends Component {
    // state = {
    //     credentials: 
    // }
    componentDidMount(
        this.props.dispatch()
    )

    render() {

        return (
            <div>Message List</div>
        );
    }
}

export default connect()(LoginUser);