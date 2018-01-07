import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import { loginAction } from '../actions/'

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }
  }

  render() {
    return(
      <div>
        <form className="form-horizontal" onSubmit={ (e) => this.login(e)}>
          <div className="form-group">
            <div className="col-sm-4 col-sm-offset-4">
              <input required type="text" className="form-control" id="inputUsername" placeholder="Username" onChange={ (e) => this.setState({username: e.target.value}) } />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-4 col-sm-offset-4">
              <input required type="password" className="form-control" id="inputPassword" placeholder="Password" onChange={ (e) => this.setState({password: e.target.value}) } />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-4 col-sm-offset-4">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </div>
        </form>
      </div>
    )
  }

  componentDidMount() {
    this.loginCheck()
  }

  loginCheck() {
    if (localStorage.getItem('token') == null) {
      this.props.history.push('/login')
    } else {
      this.props.history.push('/')
    }
  }

  login = (e) => {
    e.preventDefault()
    axios({
      method: 'POST',
      url: `http://localhost:3000/users/login`,
      data: {
        username: this.state.username,
        password: this.state.password
      }
    })
    .then(response => {
      if (response.data.message === 'login success') {
        localStorage.setItem('token', response.data.token)
        this.props.loginAction(response)
        this.loginCheck()
      } else if (response.data.message === 'password incorrect') {
        alert(response.data.message)
      } else if (response.data.message === 'username not found') {
        alert(response.data.message)
      } else {
        console.log(response)
      }
    })
    .catch(err => console.log(err))
  }
}

const mapStateToProps = (state) => {
  return {
    user_id: state.userReducer.user_id,
    first_name: state.userReducer.first_name,
    last_name: state.userReducer.last_name
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginAction: (data) => dispatch(loginAction(data))
  }
}

const connectComponent = connect(mapStateToProps, mapDispatchToProps)(Login)

export default connectComponent
