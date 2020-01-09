import React, { Component } from 'react';
import './randomplanet.scss';

export default class RamdomPlanet extends Component {


    render() {
        return (
            <div className="my-5">
                <div className="random-planet jumbotron rounded">
                    <img className="planet-image"
                        src="https://starwars-visualguide.com/assets/img/planets/5.jpg" />
                    <div>
                        <h4 className="text-center">Planet Name</h4>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <span className="term">Population</span>
                                <span>123124</span>
                            </li>
                            <li className="list-group-item">
                                <span className="term">Rotation Period</span>
                                <span>43</span>
                            </li>
                            <li className="list-group-item">
                                <span className="term">Diameter</span>
                                <span>100</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
} 