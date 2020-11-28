import React, { Component } from 'react';
import './ItemsList.scss';
import ErrorBoundry from '../ErrorBoundry';
import Loading from '../Loading/';
import ItemListDetalis from '../ItemListDetalis/';



export default class ItemsList extends Component {

    constructor(props){
        super(props)
        this.state = {
            loading : true,
            list : null,
        } 
    }

    componentDidMount(){
        this.props.children(1)
        .then(body => {
            this.setState({
                loading : false,
                list : body.results
            })
        })
        .catch(err => {
            console.log(`Could not all list fetch! ${err}`);
            this.setState({
                loading : false,
                list : false
            })
        })
    }

    render() {       
        if (this.state.loading )
        {
            return(
                <Loading/>
            )
        }
        if (this.state.loading == false) {
            return (
                    <ErrorBoundry>
                        <ul className="item-list list-group">
                            <ItemListDetalis list = {this.state.list} onClikItems = {(e) => this.props.onClikItems(e)} renderFunction = {this.props.renderFunction}/>
                        </ul>
                    </ErrorBoundry>
                    
           
            )
        }       
    }
}