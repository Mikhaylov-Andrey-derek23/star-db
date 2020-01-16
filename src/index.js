import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/';
import 'jquery';
import 'popper.js';
import './style/bootstrap.min.css';
// import SwapiServis from './Service';


ReactDOM.render(<App />, document.getElementById("root"));


// const swapi = new SwapiServis;

// swapi.getAllPeople().
// then(
//     body=>{
//         body.results.map(e=>console.log(e.name));
//     })
// .catch(err => { console.log(`Could not fetch ${err}`) });

// swapi.getAllPlanets().
// then(
//     body=>{
//         body.results.map(e=>console.log(e.name));
//     })
// .catch(err => { console.log(`Could not fetch ${err}`) });

// swapi.getAllStarships().
// then(
//     body=>{
//         body.results.map(e=>console.log(e.name));
//     })
// .catch(err => { console.log(`Could not fetch ${err}`) });

// swapi.getPerson('4').then(body=>console.log(`personal- ${body.name}`)).catch(err => { console.log(`Could not fetch ${err}`) });

// swapi.getPlanet('4').then(body=>console.log(body)).catch(err => { console.log(`Could not fetch ${err}`) });

// swapi.getStarship('12').then(body=>console.log(`starship - ${body.name}`)).catch(err => { console.log(`Could not fetch ${err}`) });



