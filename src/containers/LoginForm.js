import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeForm, loginUser } from '../actions/authenticate'
import { Card, CardHeader, CardText } from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import RefreshIndicator from 'material-ui/RefreshIndicator'

class LoginForm extends Component {
	componentWillReceiveProps(nextProps){
		if(nextProps.isLoggedIn && nextProps.history) {
			nextProps.history.push('/')
		}
	}

	changeEmail(e){
		const { dispatch } = this.props
		dispatch(changeForm({email: e.target.value, password: this.props.password}))
	}

	changePassword(e){
		const { dispatch } = this.props
		dispatch(changeForm({email: this.props.email, password: e.target.value}))
	}

	submitLogin(e){
		const { dispatch } = this.props
		e.preventDefault();
		dispatch(loginUser(this.props.email, this.props.password))
	}

	render() {
		const { email, password, isLoggingIn } = this.props
		return (
			<Card>
				<CardHeader
					title="Login"
					subtitle="Login With VA Creds"
				/>
				<CardText>
					<form onSubmit={this.submitLogin.bind(this)}>
						<TextField
							hintText="Email"
							type="text"
							value={email}
							onChange={this.changeEmail.bind(this)}
						/>
						<TextField
							hintText="Password"
							type="password"
							value={password}
							onChange={this.changePassword.bind(this)}
							style={{float: 'right'}}
						/>
						<RaisedButton label="Login" primary={true} type="submit" onClick={this.submitLogin.bind(this)} disabled={isLoggingIn}/>
						{isLoggingIn &&
							<RefreshIndicator
								size={40}
								left={10}
								top={0}
								status="loading"
								style={{display: 'inline-block', position: 'relative'}}
							/>
						}
					</form>
				</CardText>
			</Card>
		)
	}
}

function mapStateToProps(state) {
	const { email, password } = state.authenticate.loginData
	const { isLoggedIn, isLoggingIn } = state.authenticate

	return {
		email,
		password,
		isLoggedIn,
		isLoggingIn
	}
}

export default connect(mapStateToProps)(LoginForm)
