import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
export class Movie extends Component {
static propTypes = {
    title: PropTypes.string,
    year: PropTypes.string,
}
    render()
    {
        const {id,title, year, poster} = this.props
        return(
            <Link to={`/detail/${id}`}>
            <div className="card">
                <div className="card-header">
                    <img src={poster} alt={title} />
                </div>
                <div className="card-body">
                    <h5>{title}</h5>
                    <p>{year}</p>
                </div>
            </div>
            </Link>
        );
    }
}