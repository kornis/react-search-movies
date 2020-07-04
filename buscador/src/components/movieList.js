import React, {Component} from 'react';
import {Movie} from './movie';
export class MovieList extends Component {

    render(){
        const movies = this.props.results;
        return(
            movies.map(movie =>
                {
                    return <Movie
                                key={movie.imdbID}
                                poster={movie.Poster}
                                title={movie.Title}
                                year = {movie.Year}
                            >
                            </Movie>
                })
            
        )
    }
}