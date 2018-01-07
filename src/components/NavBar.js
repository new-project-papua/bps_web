import React from 'react'

class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="?#">BPS</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            { this.showMenu() }
            { this.showLogoutButton() }
          </div>
        </div>
      </nav>
    )
  }

  showLogoutButton() {
    if (localStorage.getItem('token') !== null) {
      return (
        <ul className="nav navbar-nav navbar-right">
          <li><a href="?#" onClick={ () => localStorage.removeItem('token') }>Logout</a></li>
        </ul>
      )
    }
  }

  showMenu() {
    if (localStorage.getItem('token') !== null) {
      return (
        <ul className="nav navbar-nav">
          <li><a href="?#">List Data</a></li>
          <li><a href="?#">Buat Data Baru</a></li>
        </ul>
      )
    }
  }
}
 export default NavBar
