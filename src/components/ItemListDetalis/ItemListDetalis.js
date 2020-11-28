import React, { Component } from 'react';


export default class ItemListDetalis extends Component{
    constructor(props)
    {
        super(props),
        this.state = {

        }
    }
    render() {
        return this.props.list.map((item) => {
            const decription = this.props.renderFunction(item) 
            return(
                <li className="list-group-item" onClick={() => this.props.onClikItems(item.id)} key = {item.id}>
                    {item.name}
                    {decription}
                </li>
            )
        })
  
    }
}