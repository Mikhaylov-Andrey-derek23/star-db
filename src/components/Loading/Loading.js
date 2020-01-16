import React, { Component } from 'react';
import './Loading.scss';

export default class Loading extends Component {

    render() {
        return (
            <div className="col-12 my-3 bg-dark text-center py-4">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    }
}

