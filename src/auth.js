import React, { Component } from 'react'
import { connect } from 'react-redux'
import { userIsLoggedIn } from './actions/authenticate'

export default function(ComposedComponent) {
    class EnsureAuth extends Component{
        componentWillMount() {
            const { dispatch } = this.props
            if(!this.props.isLoggedIn) {
                this.props.history.push('/login')
            }
            if(localStorage.token != null && localStorage.user != null) {
                dispatch(userIsLoggedIn())
            }
        }

        componentWillReceiveProps(nextProps) {
            if(!nextProps.isLoggedIn) {
                nextProps.history.push('/login')
            }
        }

        render() {
            return <ComposedComponent {...this.props} />
        }
    }

    function mapStateToProps(state) {
        return {
            isLoggedIn : state.authenticate.isLoggedIn
        }
    }

    return connect(mapStateToProps)(EnsureAuth)
}
