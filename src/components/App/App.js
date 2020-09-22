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
            error : false, 
            loadingListPeaople : true,
            listPeople : null,
            selectPerson : 1

            
            
        }

    }

    onError(err) {
        console.log(`Could not fetch! ${err}`);
        this.setState({
            loading : false,
            error: true
        }) 
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
        this.setState({
            selectPerson : key
        })
    }
    

    swapi = new SwapiServis();

    componentDidMount(){
        //this.updatePlanet();
        //this.interval = setInterval(this.updatePlanet, 5000);
        this.getAllpeople(1);
        //this.getPersonal(1);
        // this.getStarship();
    }

    componentWillUnmount()
    {
        //clearInterval(this.interval);
    }

    render() {
        return (
            <div className="wrapper">
                <Header />
                <div className="w-100">
                    <RandomPlanet/>
                </div>
                
                <div className="row">
                    {this.state.listPeople ? <ItemsList listPeople ={this.state.listPeople} onClikItemsPeople = { (e) => this.onClikItemsPeople(e)}/> : ''}
                    {this.state.loadingListPeople ? <Loading/> : ''}
                    {this.state.listPeople == false ? <ErrorMessage/> : ''}
                    
                    <PersonDetalis  selectPerson={this.state.selectPerson}/> 
                    


                    
                    {/* <PlanetDetails />
                    <StarshipDetalis /> */}
                    
                </div>
            </div>
        )
    }
};