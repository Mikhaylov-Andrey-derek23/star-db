import React, { Component } from 'react';
import './ItemsList.scss';

export default class ItemsList extends Component {

    render() {
        //console.log(this.props.listPeople)
        return (
            <div className="col-md-6">
                <ul className="item-list list-group">
                    {this.props.listPeople.map(e => 
                        <li className="list-group-item" key={e.id}  onClick={() => this.props.onClikItemsPeople(e.id)}>{e.name}</li>
                    )}
                </ul>
            </div>
        )
    }
}