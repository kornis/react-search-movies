import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class Movie extends Component {
static propTypes = {
    title: PropTypes.string,
    year: PropTypes.string,
}
    render()
    {
        const {id,title, year, poster} = this.props
        return(
            <a href={`?id=${id}`}>
            <div className="card">
                <div className="card-header">
                    <img src={poster} alt={title} />
                </div>
                <div className="card-body">
                    <h5>{title}</h5>
                    <p>{year}</p>
                </div>
            </div>
            </a>
        );
    }
}