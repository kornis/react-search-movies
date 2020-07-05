import React, {Component} from 'react';
import {Title} from '../components/title';
import {MovieList} from '../components/movieList';
import {SearchForm} from '../components/searchForm';

export class Home extends Component {

    state = 
    {
      results :[],
      searchUsed: false,
    }
  
    _handleResults = (results) =>
    { 
      this.setState({results, searchUsed:true});
    }
    _renderResults() {
      return this.state.results.length === 0
      ? <p>Movie not found!</p>
      : <MovieList results={this.state.results}></MovieList>
    }

    render(){
        return(
            <React.Fragment>
            <Title>Buscador de películas</Title>
            <SearchForm onResults={this._handleResults}></SearchForm>
            <div className="row">
              <div className="col">
                {this.state.searchUsed 
                  ? this._renderResults()
                  : <small>Use the form to search a movie...</small> 
                  }
              </div>
            </div>
            </React.Fragment>
        )
    }
}