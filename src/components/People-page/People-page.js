import React, { Component } from 'react';
import RandomPlanet from '../RandomPlanet/';
import ItemsList from '../items-list';
import ItemDetalis from '../ItemDetalis/';
import ErrorBoundry from '../ErrorBoundry/';
import SwapiServis from '../../service/';
import Row from '../Row/';

export default class People_page extends Component{
    constructor(props){
        super(props);
        this.state = {
            selectPerson : 11
        }
    }
    
    swapi = new SwapiServis();
     
    onClikItemsPeople(key){
        this.setState({
            selectPerson : key
        })
    }
    
   

    

    render(){
        const {getPerson, getStarship, getPlanet, getUrl} = this.swapi; 
        return(
            <React.Fragment>
                <div className="w-100">
                    <ErrorBoundry>
                        <RandomPlanet/>
                    </ErrorBoundry>
                    
                </div>
                
                <Row left={
                    <ItemsList onClikItems = { (e) => this.onClikItemsPeople(e)} renderFunction = {({gender, birth_year }) => `(gender : ${gender}; birth year : ${birth_year})`}>
                        {this.swapi.getAllPeople}
                    </ItemsList>
                } 
                right={
                    <ErrorBoundry>
                        <ItemDetalis  
                        selectItem={this.state.selectPerson}
                        dataFunction = {getPerson}
                        imgType = {"characters"}
                        fields = {
                            [
                                {field : "gender", label : "Gender"},
                                {field : "birth_year", label : "Birth Year"},
                                {field : "eye_color", label : "Eye Color"}
                            ]
                        }
                        >
                            <p></p>
                        </ItemDetalis>
                    </ErrorBoundry>
                }
                />
                {/* <Row left ={
                        <ItemsList onClikItems = { (e) => this.onClikItemsPeople(e)} renderFunction = {({model, crew}) => ` (model : ${model}; crew : ${crew})`}>
                            {this.swapi.getAllStarships}
                        </ItemsList>
                }
                right={
                    <ErrorBoundry>
                        <ItemDetalis  
                        selectItem={this.state.selectPerson}
                        dataFunction = {getStarship}
                        imgType = {"starships"}

                        />
                    </ErrorBoundry>
                }
                />                
                <Row left={
                    <ItemsList onClikItems = { (e) => this.onClikItemsPeople(e)}  renderFunction = {({climate, surface_water}) => ( <p>(climate : {climate};  surface_water : {surface_water})</p>)}>
                        {this.swapi.getAllPlanets}
                    </ItemsList>
                
                } 
                right={
                    <ErrorBoundry>
                        <ItemDetalis  
                        selectItem={this.state.selectPerson}
                        dataFunction = {getPlanet}
                        imgType = {"planets"}

                    />
                    </ErrorBoundry>
                }
                /> */}
            </React.Fragment>
        )
    }
} 