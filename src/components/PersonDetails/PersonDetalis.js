import React, { Component } from 'react';
import './PersonDetalis.scss';

export default class PersonDetalis extends Component {

    render() {
        return (
            <div className="col-md-6">
                <div className="person-details">
                    <img className="person-image"
                        src="https://starwars-visualguide.com/assets/img/planets/4.jpg" />

                    <div className="card-body">
                        <h4>Hot</h4>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <span className="term">Gender</span>
                                <span>male</span>
                            </li>
                            <li className="list-group-item">
                                <span className="term">Birth Year</span>
                                <span>43</span>
                            </li>
                            <li className="list-group-item">
                                <span className="term">Eye Color</span>
                                <span>red</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
