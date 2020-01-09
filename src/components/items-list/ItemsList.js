import React, { Component } from 'react';
import './ItemsList.scss';

export default class ItemsList extends Component {

    render() {
        return (
            <div className="col-md-6">
                <ul className="item-list list-group">
                    <li className="list-group-item">
                        Luke Skywalker
                    </li>
                    <li className="list-group-item">
                        Darth Vader
                    </li>
                    <li className="list-group-item">
                        R2-D2
                    </li>
                </ul>
            </div>
        )
    }
}