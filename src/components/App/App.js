import React, { Component } from 'react';
import Header from '../Header/';
import RandomPlanet from '../RandomPlanet/';
import ItemsList from '../items-list';
import PersonDetalis from '../PersonDetails/';
import PlanetDetails from '../PlanetDetails/';
import StarshipDetalis from '../StarshipDetalis/';
import Loading from '../Loading/';
import './App.scss';
import SwapiServis from '../../service/';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "Title",
            randomPlanet: null,
            person : null   
            
        }
        this.updatePlanet();
        this.getPersonal();
        this.getStarship();
    }


    updatePlanet() {
        const id = Math.floor(Math.random() * 17) + 2;
        this.swapi.getPlanet(id)
            .then(body => {
                console.log(body);
                this.setState({
                    randomPlanet: body
                })
            })
            .catch(err => { console.log(`Could not fetch ${err}`) });
    }

    getPersonal(){
        const id = 3;
        this.swapi.getPerson(id)
            .then(body => {
                console.log(body);
                this.setState({
                    person: body
                })
            })
            .catch(err => { console.log(`Could not fetch ${err}`) });
    }

    getStarship(){
        const id = 3
        this.swapi.getStarship(id)
        .then(body => {
            console.log(body);
            this.setState({
                person: body
            })
        })
        .catch(err => { console.log(`Could not fetch ${err}`) });
    }

    swapi = new SwapiServis();

    render() {
        return (

            <div className="wrapper">
                <Header />
                {this.state.randomPlanet ? <RandomPlanet randomPlanet={this.state.randomPlanet} /> : <Loading/>}
                <div className="row">
                    <ItemsList />
                    <PersonDetalis />
                    <PlanetDetails />
                    <StarshipDetalis />
                </div>
            </div>
        )
    }
};