import React, { Component } from 'react';
import './PersonDetalis.scss';
import ErrorMessage from '../Error-Message';
import Loading from '../Loading/';
import SwapiServis from '../../service/';
export default class PersonDetalis extends Component {

    state = {
        hasError : false,
        loadingPerson : true,
        person : null
    }

    getPersonal = (id) =>{
        this.swapi.getPerson(id)
            .then(body => {
                this.setState({
                    person: body,
                    loadingPerson : false
                })
            })
            .catch(err => { 
                console.log(`Could not fetch! ${err}`);
                this.setState({
                    loadingPerson : false,
                    person: false
                }) 
             });
    }

    swapi = new SwapiServis();

    componentDidCatch(){
        this.setState({hasError : true}); 
        
    }

    componentDidMount(){
        this.getPersonal(this.props.selectPerson);
    }

    componentDidUpdate(oldState){
        if(this.props.selectPerson !== oldState.selectPerson){
            this.getPersonal(this.props.selectPerson)
        }
    }

    render() {
        
        if (this.state.hasError == true){
            return(
                <div className="col-md-6">
                    <ErrorMessage/>
                </div>
            )
        }
        console.log(this.state.person)
        if(this.state.person){
            const src = `https://starwars-visualguide.com/assets/img/characters/${this.state.person.id}.jpg`;
            return(
                <div className="col-md-6">
                <div className="person-details">
                    <img className="person-image"
                        src={src} />

                    <div className="card-body">
                        <h4>{this.state.person.name}</h4>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <span className="term">Gender</span>
                                <span>{this.state.person.gender}</span>
                            </li>
                            <li className="list-group-item">
                                <span className="term">Birth Year</span>
                                <span>{this.state.person.birth_year}</span>
                            </li>
                            <li className="list-group-item">
                                <span className="term">Eye Color</span>
                                <span>{this.state.person.eye_color}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            )
        }
        if(this.state.person == false){
            return(
                <div className="col-md-6"><ErrorMessage/></div>
            )
        } 
        if(this.state.loadingPerson){
            return(
                <div className="col-md-6"><Loading/></div>
            )
        }
        
       
    }
}
