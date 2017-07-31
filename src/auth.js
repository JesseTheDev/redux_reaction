import React, { Component } from 'react'
import { connect } from 'react-redux'
import { userIsLoggedIn } from './actions/authenticate'

export default function(ComposedComponent) {
class Auth extends Component{
    constructor(props, context){
        super(props, context)
    }
    componentWillMount() {
        const { dispatch } = this.props

        if(!this.props.isLoggedIn)
            this.props.history.push('/login')
            if(localStorage.token != null && localStorage.user != null)
        dispatch(userIsLoggedIn())
      console.log(this.props, this.context, (localStorage.token != null && localStorage.user != null), 'mount')
    }
  componentWillReceiveProps(nextProps) {
      if(!nextProps.isLoggedIn)
          nextProps.history.push('/login')
  }
  componentDidMount(){
      console.log(this.state, 'did')
  }

  render() {
    const { isLoggedIn } = this.props

    return <ComposedComponent {...this.props} />
  }

}


function mapStateToProps(state) {
  return {
    isLoggedIn : state.authenticate.isLoggedIn
  }
}

return connect(mapStateToProps)(Auth)
}
