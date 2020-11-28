import React, { Component } from 'react';
import './randomplanet.scss';
import SwapiServis from '../../service/';
import Loading from '../Loading/';

export default class RamdomPlanet extends Component {

    state = {
        randomPlanet: null, 
        loading : true,
    }

    updatePlanet = () => {
        const id = Math.floor(Math.random() * 17) + 3;
        this.swapi.getPlanet(id)
            .then(body => {
                // console.log(body);
                this.setState({
                    randomPlanet: body,
                    loading : false
                })
                
            })
            .catch(err => { 
                console.log(`Could not fetch! ${err}`);
                this.setState({
                    loading : false
                }) 
            });
    }

    swapi = new SwapiServis();

    componentDidMount(){
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, 5000);
    }




    render() {
        if(!this.state.loading){
            const linkImg = `https://starwars-visualguide.com/assets/img/planets/${this.state.randomPlanet.id}.jpg`;
            return (
                <div className="my-5">
                    <div className="random-planet jumbotron rounded">
                        <img className="planet-image"
                            src={linkImg} />
                        <div>
                            <h4 className="text-center">{this.state.randomPlanet.name}</h4>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <span className="term">Population</span>
                                    <span>{this.state.randomPlanet.population}</span>
                                </li>
                                <li className="list-group-item">
                                    <span className="term">Rotation period</span>
                                    <span>{this.state.randomPlanet.rotationPeriod}</span>
                                </li>
                                <li className="list-group-item">
                                    <span className="term">Diameter</span>
                                    <span>{this.state.randomPlanet.diameter}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        }
        if (this.state.loading){
            return(
                <div className="my-5"><Loading/></div>
            )
        }

        

    }
} 