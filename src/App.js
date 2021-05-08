
import React, { Component } from 'react'
import MoviesPage from './components/pages/MoviesPage';

import { Link, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div>
          <Link to="movies">Movies</Link>
          <Route path='/movies' component={MoviesPage}></Route>
      </div>
    )
  }
}

export default App;
