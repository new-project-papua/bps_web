import React from 'react'
import axios from 'axios'

class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      people: []
    }
  }

  render() {
    return(
      <div>
        <h1>INI KOMPONEN HOME</h1>
        { this.showData() }
      </div>
    )
  }

  componentWillMount() {
    this.fetchData()
  }

  fetchData() {
    axios({
      method: 'GET',
      url: 'https://swapi.co/api/people/'
    })
    .then(response => this.setState({ people: response.data.results }))
    .catch(err => console.log(err))
  }

  showData() {
    return(
      <ul>
        {this.state.people.map((data, idx) => {
          console.log(data)
          return(
            <li key={idx}>{ data.name }</li>
          )
        })}
      </ul>
    )
  }
}

export default Home
