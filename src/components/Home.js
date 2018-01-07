import React from 'react'
import { connect } from 'react-redux'

class Home extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return(
      <div>
        <h1>WELCOME!</h1>
        <h4>Aplikasi pendataan keluarga v0.1.0</h4>
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
}

const mapStateToProps = (state) => {
  return {
    user_id: state.userReducer.user_id,
    first_name: state.userReducer.first_name,
    last_name: state.userReducer.last_name
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const connectComponent = connect(mapStateToProps, mapDispatchToProps)(Home)

export default connectComponent
