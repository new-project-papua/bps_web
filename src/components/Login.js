import React from 'react'

class Login extends React.Component {
  render() {
    return(
      <div>
        <form className="form-horizontal">
          <div className="form-group">
            <div className="col-sm-4 col-sm-offset-4">
              <input type="text" className="form-control" id="inputUsername" placeholder="Username" />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-4 col-sm-offset-4">
              <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
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
}

export default Login
