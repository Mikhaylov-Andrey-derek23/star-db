import React, { Component } from 'react';
import './PersonDetalis.scss';
import ErrorMessage from '../Error-Message';

export default class PersonDetalis extends Component {

    state = {
        hasError : false
    }

    componentDidCatch(){
        this.setState({hasError : true}); 
    }

    render() {
        const src = `https://starwars-visualguide.com/assets/img/characters/${this.props.person.id}.jpg`;
        if (this.state.hasError == true){
            return(
                <div className="col-md-6">
                    <ErrorMessage/>
                </div>
            )
        }
        console.log(this.props)
        return (
            <div className="col-md-6">
                <div className="person-details">
                    <img className="person-image"
                        src={src} />

                    <div className="card-body">
                        <h4>{this.props.person.name}</h4>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <span className="term">Gender</span>
                                <span>{this.props.person.gender}</span>
                            </li>
                            <li className="list-group-item">
                                <span className="term">Birth Year</span>
                                <span>{this.props.person.birth_year}</span>
                            </li>
                            <li className="list-group-item">
                                <span className="term">Eye Color</span>
                                <span>{this.props.person.eye_color}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
