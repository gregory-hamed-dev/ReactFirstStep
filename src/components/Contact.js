import React, { Component } from 'react'

export default class Contact extends Component {
    state= {
        show: false
    }
    showContact = () =>{
        this.setState({
            show: !this.state.show
        })
    }
    deleteContact = ()=>{
        this.props.suppClick()
    }
    render() {
        return (
            <div className="card card-body mb-3 text-center">
                <h4 style={{color: '#353b48', fontFamily: 'cursive'}}>
                    {this.props.nom}&nbsp; 
                    <i style = {{cursor: 'pointer', fontSize: '1rem'}} className="fas fa-sort-down" onClick={this.showContact}></i>
                    <i className="fas fa-times" style={{cursor: 'pointer', float:'right', color:'#c23616', fontSize: '1rem'}} onClick={this.deleteContact}></i>
                </h4>
                <img className="rounded-circle" style={{width: '100px', display: 'block', margin: '20px auto'}} src={this.props.avatar} alt={this.props.nom}></img>
                {this.state.show ?(
                    <ul style={{color: '#2980b9'}} className="card card-body mb-3">
                    <li className="list-group-item">
                        Email : {this.props.email}
                    </li>
                    <li className="list-group-item">
                        tel : {this.props.tel}
                    </li>
                </ul>
                ) : null}                   
            </div>
        )
    }
}
