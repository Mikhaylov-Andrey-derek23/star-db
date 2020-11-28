import React, { Component } from 'react';

export default class Row extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="row mb-3">
                <div className="col-md-6">
                    {this.props.left}
                </div>
                <div className = "col-md-6">
                    {this.props.right}
                </div>
            </div>
        )
    }

}
