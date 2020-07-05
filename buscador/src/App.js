import React, {Component} from 'react';
import './css/bootstrap.min.css';
import {Title} from './components/title';
import {SearchForm} from './components/searchForm';
import {MovieList} from './components/movieList';
import {Detail} from './pages/detail';

class App extends Component {
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
  const url = new URL(document.location);
  const hasId = url.searchParams.has('id');
  if(hasId)
  {
    return <Detail id={url.searchParams.get('id')}></Detail>
  }
  return (
    <div className="container">
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
    </div>
  );
  }
}

export default App;
