import React, { Component } from 'react'
import './third-party/reset.css'
import './App.css'
import Loading from './Loading'
import Card from './Card'
import Error from './Error'

export default class App extends Component {
  state = {
    movies: [],
    loading: true,
    displayError: false
  }

  componentDidMount = async () => {
    try {
      const serverData = await fetch('https://yts.mx/api/v2/list_movies.json');
      const response = await serverData.json();
      this.setState({ movies: response.data.movies });
      console.log(this.state.movies);
    } catch (err) {
      this.setState({ displayError: 'ERROR: Something seems to be wrong' })
    }
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading === true) {
      return <Loading />
    } else if (this.state.displayError !== false) {
      return <Error displayError={this.state.displayError} />
    }

    return (
      <div className="container">
        <h1>Movies App</h1>
        <div className="wrapper">
          {
            this.state.movies.map((movie, index) => {
              return <Card key={index} title={movie.title} image={movie.medium_cover_image} rating={movie.rating} year={movie.year} />
            })
          }
        </div>
      </div>
    )
  }
}
