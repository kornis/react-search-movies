import React, {Component} from 'react';
import {Movie} from '../components/movie';
const _API_KEY = "f441bd5c";
export class Detail extends Component {

    state = {
        movie: {}
    }

    _fetchMovie(id)
    {
        fetch(`http://www.omdbapi.com/?apikey=${_API_KEY}&i=${id}`)
        .then(result => result.json())
        .then(movie => 
            {
                console.log(movie)
                this.setState({movie})
            });
    }

    _goBack()
    {
        window.history.back();
    }

    componentDidMount()
    {
        const {id} = this.props;
        this._fetchMovie(id);
        console.log('did mount')
    }

    render()
    {
        const {imdbID, Title, Poster, Year} = this.state.movie;
        console.log("render")
        return(
            <div>
            <button onClick={this._goBack}>Volver</button>
            <Movie
            id={imdbID}
            title={Title}
            year={Year}
            poster={Poster}
            ></Movie>
            </div>

        ) 

    }  
  }