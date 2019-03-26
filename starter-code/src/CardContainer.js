import React, { Component } from 'react';
import contacts from './contacts.json'
import otherContacts from './contacts.json'
import ContactCard from './ContactCard.js';
import CoolButton from './CoolButton.js';

class CardContainer extends Component {

  state = {contacts: contacts.slice(0,5)}
  
  AddRandomContact = () => {
    const {contacts} = this.state;
    const copyOfContacts = [...otherContacts];
    const rest = copyOfContacts.splice(5);
    const random = Math.floor(Math.random()* rest.length);
    const newContact = rest[random];
    this.setState({contacts: [...contacts, newContact] });
  }

  render() {

    const {contacts} = this.state


    return (
      <div>
        <CoolButton onClick={ this.AddRandomContact } />
          {
            contacts.map( (contact, index)=>
            <ContactCard key={index} contact={contact} />
            )
          } 

      </div> 
    );
  }
}

export default CardContainer;