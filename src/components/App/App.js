import React, { Component } from 'react';
import Header from '../Header/';
import RandomPlanet from '../RandomPlanet/';
import ItemsList from '../items-list';
import PersonDetalis from '../PersonDetails/';
import PlanetDetails from '../PlanetDetails/';
import StarshipDetalis from '../StarshipDetalis/';
import ErrorMessage from '../Error-Message';
import Loading from '../Loading/';
import './App.scss';
import SwapiServis from '../../service/';


export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "Title",
            randomPlanet: null,
            person : null,   
            loading : true,
            error : false, 
            loadingListPeaople : true,
            loadingPerson : true,
            listPeople : null

            
            
        }

    }

    onError(err) {
        console.log(`Could not fetch! ${err}`);
        this.setState({
            loading : false,
            error: true
        }) 
    }
    updatePlanet = () => {
        const id = Math.floor(Math.random() * 17) + 3;
        this.swapi.getPlanet(id)
            .then(body => {
                //console.log(body);
                this.setState({
                    randomPlanet: body,
                    loading : false
                })
            })
            .catch(err => { 
                console.log(`Could not fetch! ${err}`);
                this.setState({
                    loading : false,
                    randomPlanet: false
                }) 
            });
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

    getStarship(){
        const id = 12
        this.swapi.getStarship(id)
        .then(body => {
            console.log(body);
            this.setState({
                starship: body
            })
        })
        .catch(err => { 
            console.log(`Could not fetch! ${err}`);
                this.setState({
                    loading : false,
                    starship: false
                }) 
         });
    }

    getAllpeople = (id)=>{
        this.swapi.getAllPeople(id)
            .then(body => {
                this.setState({
                    loadingListPeople : false,
                    listPeople : body.results
                })
            })
            .catch(err => {
                console.log(`Could not all people fetch! ${err}`);
                this.setState({
                    loadingListPeople : false,
                    listPeople : false
                })
            })
        
    }
    
    onClikItemsPeople(key){
        this.getPersonal(key);
    }
    

    swapi = new SwapiServis();

    componentDidMount(){
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, 5000);
        this.getAllpeople(1);
        this.getPersonal(1);
        // this.getStarship();
    }

    componentWillUnmount()
    {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div className="wrapper">
                <Header />
                <div className="w-100">
                    {this.state.randomPlanet ? <RandomPlanet randomPlanet={this.state.randomPlanet} /> : ''}
                    {this.state.loading ? <Loading/> : ''}
                    {this.state.randomPlanet == false ? <ErrorMessage/> : ''}
                </div>
                
                <div className="row">
                    {this.state.listPeople ? <ItemsList listPeople ={this.state.listPeople} onClikItemsPeople = { (e) => this.onClikItemsPeople(e)}/> : ''}
                    {this.state.loadingListPeople ? <Loading/> : ''}
                    {this.state.listPeople == false ? <ErrorMessage/> : ''}
                    
                    {this.state.person ? <PersonDetalis  person = {this.state.person}/> : ''}
                    {this.state.loadingPerson ? <Loading/> : ''}
                    {this.state.person == false ? <ErrorMessage/> : ''}


                    
                    {/* <PlanetDetails />
                    <StarshipDetalis /> */}
                    
                </div>
            </div>
        )
    }
};