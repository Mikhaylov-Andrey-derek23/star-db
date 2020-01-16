import React, { Component } from 'react';
import './randomplanet.scss';

export default class RamdomPlanet extends Component {



    render() {
        const linkImg = `https://starwars-visualguide.com/assets/img/planets/${this.props.randomPlanet.id}.jpg`;
        return (
            <div className="my-5">
                <div className="random-planet jumbotron rounded">
                    <img className="planet-image"
                        src={linkImg} />
                    <div>
                        <h4 className="text-center">{this.props.randomPlanet.name}</h4>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <span className="term">Population</span>
                                <span>{this.props.randomPlanet.population}</span>
                            </li>
                            <li className="list-group-item">
                                <span className="term">Rotation period</span>
                                <span>{this.props.randomPlanet.rotationPeriod}</span>
                            </li>
                            <li className="list-group-item">
                                <span className="term">Diameter</span>
                                <span>{this.props.randomPlanet.diameter}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
} 