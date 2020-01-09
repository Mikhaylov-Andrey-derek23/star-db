import React, { Component } from 'react';
import './PlanetDetails.scss';

export default class PlanetDetails extends Component {

    render() {
        return (
            <div className="col-md-6">
                <div className="planet-details">
                    <img className="planet-image"
                        src="https://starwars-visualguide.com/assets/img/planets/4.jpg" />

                    <div className="card-body">
                        <h4>Hoth</h4>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <span className="term">Climate</span>
                                <span>frozen</span>
                            </li>
                            <li className="list-group-item">
                                <span className="term">Diameter</span>
                                <span>7200</span>
                            </li>
                            <li className="list-group-item">
                                <span className="term">Gravity</span>
                                <span>1.1 standard</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
