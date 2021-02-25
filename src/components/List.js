import React, { Component } from 'react';
import Contact from './Contact';

export default class List extends Component {
    state ={
        contacts:[
            {
                id : 1,
                avatar: 'https://i.pinimg.com/564x/55/6d/8e/556d8e804d2d816cfcdde944af9b3156.jpg',
                nom :'John Doe',
                email : 'johndoe@outlook.com',
                tel : '555-958-532'
            },
            {
                id : 2,
                avatar: 'https://i.pinimg.com/564x/bb/1f/08/bb1f08c2dca39b1f9028acb5dba7a389.jpg',
                nom :'Martin Matin',
                email : 'martin-matin@gulli.com',
                tel : '555-958-532'
            },
            {
                id: 3,
                avatar: 'https://i.pinimg.com/564x/64/13/12/641312e5bf5b96c7356747312dbd018b.jpg',
                nom :'Poule oh Popo',
                email : 'popo@outlook.com',
                tel : '555-958-532'
            }
        ]
    }
    supprime = (id) =>{
        const nvContacts = this.state.contacts.filter(contact => contact.id !==id )
        this.setState({
            contacts: nvContacts
        })
    }
    render() {
        
        return (
            <React.Fragment>
                {this.state.contacts.map(contact =>(
                    <Contact
                        key = {contact.id}
                        avatar = {contact.avatar}
                        nom = {contact.nom}
                        email = {contact.email}
                        tel = {contact.tel}
                        suppClick = {() => this.supprime(contact.id)}         
                    />
                ))}
            </React.Fragment>
        )
    }
}

