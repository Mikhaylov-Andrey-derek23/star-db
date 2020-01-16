import React, {Component} from 'react';
import './StarshipDetalis.scss';

export default class StarshipDetalis extends Component{

    render(){
        return(
            <div className="col-md-6">
                <div className="starship-details">
                    <img className="starship-image"
                        src="https://starwars-visualguide.com/assets/img/starships/9.jpg" />

                    <div className="card-body">
                        <h4>Deadth Star</h4>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <span className="term">Model</span>
                                <span>DS-1</span>
                            </li>
                            <li className="list-group-item">
                                <span className="term">Chost in credits</span>
                                <span>7200</span>
                            </li>
                            <li className="list-group-item">
                                <span className="term">Length</span>
                                <span>1200000</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}