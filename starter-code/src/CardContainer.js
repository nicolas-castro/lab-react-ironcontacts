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

  sortByName = () => {
    const copyOfContacts = [...this.state.contacts];
    copyOfContacts.sort(function(a, b){
        var x = a.name.toLowerCase();
        var y = b.name.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
      });
    this.setState({contacts: copyOfContacts});
  }

  deleteContact = (contactId) => {
    const {contacts} = this.state;
    const copyOfContacts = [...contacts];
    copyOfContacts.splice(+contactId, 1);
    this.setState({contacts: copyOfContacts});
  }

  render() {

    const {contacts} = this.state

    return (
      <div>
        <CoolButton onClick={ this.AddRandomContact } btnName="Add Random Contact" />
        <CoolButton onClick={ this.sortByName } btnName="Sort by Name" />
          {
            contacts.map( (contact, index)=>
            <ContactCard key={index} contact={contact} index={index} deleteMethod={this.deleteContact}/>
            )
          } 

      </div> 
    );
  }
}

export default CardContainer;