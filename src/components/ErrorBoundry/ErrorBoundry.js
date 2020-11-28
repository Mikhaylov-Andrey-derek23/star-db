import React, { Component } from 'react';
import ErrorMessage from '../Error-Message';

export default class ErrorBoundry extends Component{
    constructor(props){
        super(props)
        this.state = {
            hasError : false
        }
    }
    
    componentDidCatch(){
        this.setState({
            hasError : true
        })
    }

    render(){
        if (this.state.hasError){
            return <ErrorMessage/>
        } 
        return this.props.children 
    } 
} 
