import React, {Component} from 'react';

export class SearchForm extends Component {
state = {
    inputMovie: ''
}

_handleChange = (e) => {
    this.setState({inputMovie: e.target.value});
}
_handleSubmit = (e) => {
    e.preventDefault();
    const {inputMovie} = this.state;
    const _API_KEY = "f441bd5c";
    fetch(`http://www.omdbapi.com/?apikey=${_API_KEY}&s=${inputMovie}`)
    .then(result => result.json())
    .then(data => 
        {
            const {Search = [], totalResults = '0'} = data;
            console.log(Search, totalResults)
            this.props.onResults(Search);
        });
}

render(){
    return(
            <div className="row">
                <div className="col">
                    <div className="form-inline justify-content-center">
                        <form onSubmit={this._handleSubmit}>
                        <div className="form-group">
                            <input 
                                type="text" 
                                name="search" 
                                placeholder="Movie to search" 
                                className="form-control"
                                onChange={this._handleChange} 
                            />
                            <button className="btn btn-primary">Buscar</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
            )
        }
    }
 