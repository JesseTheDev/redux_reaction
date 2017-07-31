import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { logoutUser } from '../actions/authenticate'
import RaisedButton from 'material-ui/RaisedButton'

class Logout extends Component {
  render() {
    return (
        <RaisedButton label="Logout" primary={true} onClick={this.logoutUser.bind(this)} />
    )
  }

  logoutUser(){
    const { dispatch } = this.props
    dispatch(logoutUser())
  }
}

function mapStateToProps(state) {
  const { isLoggedIn } = state.authenticate
  return {
    isLoggedIn
  }
}

export default connect(mapStateToProps)(Logout)
