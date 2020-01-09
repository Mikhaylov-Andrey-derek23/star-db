import React, { Component } from 'react';
import Header from '../Header/';
import RandomPlanet from '../RandomPlanet/';
import ItemsList from '../items-list';
import PersonDetalis from '../PersonDetails/';
import PlanetDetails from '../PlanetDetails/';
import './App.scss';


export default class App extends Component {

    render() {

        return (

            <div className="wrapper">
                <Header />
                <RandomPlanet />
                <div className="row">
                    <ItemsList />
                    {/* <PersonDetalis/> */}
                    <PlanetDetails/>
                </div>
            </div>
        )
    }
};