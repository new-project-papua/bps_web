import React from 'react'

class Login extends React.Component {
  render() {
    return(
      <div>
        <form className="form-horizontal">
          <div class="form-group">
            <div class="col-sm-4 col-sm-offset-4">
              <input type="text" class="form-control" id="inputUsername" placeholder="Username" />
            </div>
          </div>
          <div class="form-group">
            <div class="col-sm-4 col-sm-offset-4">
              <input type="password" class="form-control" id="inputPassword" placeholder="Password" />
            </div>
          </div>
          <div class="form-group">
            <div class="col-sm-4 col-sm-offset-4">
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Login
