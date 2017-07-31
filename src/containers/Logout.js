import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { logoutUser } from '../actions/authenticate'

class Logout extends Component {
  render() {
    return (
      <button onClick={this.logoutUser.bind(this)}>Logout</button>
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
