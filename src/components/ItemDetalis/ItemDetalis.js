import React, { Component } from 'react';
import './ItemDetalis.scss';
import Loading from '../Loading/';
import SwapiServis from '../../service/';

const Record = ({item, field, label }) => {
    return (
        <ul className="list-group-item"> 
            <span className="term">{label}</span>
            <span>{field}</span>
        </ul>
    )
}


export default class ItemDetalis extends Component {

    state = {
        loading : true,
        item : null,
        src : ''
    }


    swapi = new SwapiServis();

   

    getPersonal = (id) =>{
        this.props.dataFunction(id)
            .then(body => {
                this.setState({
                    item: body,
                    loading : false
                })
            })
            .catch(err => { 
                console.log(`Could not fetch! ${err}`);
                this.setState({
                    loading: false,
                   
                }) 
             });
    }
    getImg = (id, type) => {
        this.swapi.getURl(id, type )
            .then(body => {
                this.setState({
                    src : body
                })
            })
    }


    // componentDidCatch(){
    //     this.setState({hasError : true}); 
        
    // }

    componentDidMount(){
        this.getPersonal(this.props.selectItem);
        this.getImg(this.props.selectItem, this.props.imgType)
    }

    componentDidUpdate(prevProps){
        if(this.props.selectItem !== prevProps.selectItem){
            this.getPersonal(this.props.selectItem)
            this.getImg(this.props.selectItem, this.props.imgType)
        }
    }

    render() { 
        console.log(this.state)
        if(!this.state.loading){
            const src = this.state.src;
            return(
                <div className="person-details">
                    <img className="person-image"
                        src={this.state.src} />

                    <div className="card-body">
                        <h4>{this.state.item.name}</h4>
                        <ul className="list-group list-group-flush">
                            {
                                this.props.fields.map(e  => 
                                    <li className="list-group-item">
                                        <span className="term">{e.label}</span>
                                        <span>{this.state.item[e.field]}</span>
                                    </li>
                                ) 
                            }
                        </ul>
                    </div>
                   
                </div>
            )
        }
        if(this.state.loading){
            return(
                <Loading/>
            )
        }
        
       
    }
}
