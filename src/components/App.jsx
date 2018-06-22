import React, { Component } from 'react';
import { connect } from 'react-redux';
import KwitterEntry from './KwitterEntry';
import { GET_MESSAGES } from '../actions/messageActions';

class App extends Component {
  
  componentDidMount() {
   
  }

  render() {
    return (
      <React.Fragment>
          <KwitterEntry/>
      </React.Fragment>
    );
  }
}


export default connect ()(App);

// Need to map state to props then do this.props.dispatch