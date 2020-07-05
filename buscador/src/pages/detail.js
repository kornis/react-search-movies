import React, {Component} from 'react';
import {Movie} from '../components/movie';
import PropTypes from 'prop-types';
import {ButtonBackToHome} from '../components/ButtonBackToHome';
const _API_KEY = "f441bd5c";
export class Detail extends Component {
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string,
        })
    }

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


    componentDidMount()
    {
        console.log(this.props)
        const {id} = this.props.match.params;
        this._fetchMovie(id);
        console.log('did mount')
    }

    render()
    {
        const {imdbID, Title, Poster, Year} = this.state.movie;
        console.log("render")
        return(
            <div>
            <ButtonBackToHome />
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