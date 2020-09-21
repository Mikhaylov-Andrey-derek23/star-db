import React, {Component} from 'react';
import './ErrorMessage.scss';
import icon from './dead-star.png';



export default class ErrorMessage extends Component{


    render(){
        return(
            <div className="error-message jumbotron">
                <img src={icon} alt="dead-star" width="100"></img>
                <p className="Boom">Boom</p>
                <p>somthing has gone terribly wrong</p>
                <p>(but we alredy sent droids it fix it)</p>
            </div>
        )
    }
}
