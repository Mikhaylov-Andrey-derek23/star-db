import React, { Component } from 'react';
import Header from '../Header/';
import './App.scss';
import People_page from '../People-page/';


export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {

        return (
            <div className="wrapper">
                <Header />
                <People_page/>   
            </div>
        )
    }
};