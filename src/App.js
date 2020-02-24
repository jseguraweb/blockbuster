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
    displayError: false,
    search: ''
  }

  componentDidMount = async () => {
    try {
      const serverData = await fetch('https://yts.mx/api/v2/list_movies.json');
      const response = await serverData.json();
      this.setState({ movies: response.data.movies });
      // console.log(this.state.movies);
    } catch (err) {
      this.setState({ displayError: 'ERROR: Something seems to be wrong' })
    }
    this.setState({ loading: false });
  }

  filterMovies = event => {
    this.setState({ search: (event.target.value) });
    // console.log(this.state.search);
  }

  render() {
    // display loading while waiting for fetching the data
    if (this.state.loading === true) {
      return <Loading />
    }
    // display an error if the data can't be fetched
    else if (this.state.displayError !== false) {
      return <Error displayError={this.state.displayError} />
    }
    // filtering movies: indexOf whatever is in this.state.search and if it's not -1 (which would mean that it doesn' exist)
    let filteredMovies = this.state.movies.filter(movie => movie.title.toLocaleLowerCase().indexOf(this.state.search.toLocaleLowerCase()) !== -1);

    return (
      <div className="container">
        <h1>Blockbuster</h1>
        <form action="#">
          <label htmlFor="films">
            <span>Filter</span>
            <input type="text" id="films" onChange={this.filterMovies} />
          </label>
        </form>
        <div className="wrapper">
          {
            filteredMovies.map((movie, index) => {
              return <Card key={index} title={movie.title} image={movie.medium_cover_image} rating={movie.rating} year={movie.year} description={movie.summary} />
            })
          }
        </div>
      </div>
    )
  }
}
