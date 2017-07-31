import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { logoutUser } from '../actions/authenticate'
import RaisedButton from 'material-ui/RaisedButton'

class Logout extends Component {
    logoutUser(){
        const { dispatch } = this.props
        dispatch(logoutUser())
    }

    render() {
        return (
            <RaisedButton label="Logout" primary={true} onClick={this.logoutUser.bind(this)} />
        )
    }
}

function mapStateToProps(state) {
    const { isLoggedIn } = state.authenticate

    return {
        isLoggedIn
    }
}

export default connect(mapStateToProps)(Logout)
