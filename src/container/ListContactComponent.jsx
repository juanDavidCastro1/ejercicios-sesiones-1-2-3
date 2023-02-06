import React from 'react'
import ContactComponent from '../components/pure/ContactComponent';
import { Contact } from '../models/contact.class';
import { STATE } from '../models/state.enum';

function ListContactComponent() {

    const defaultContact = new Contact("Juan", "David", "example@email.com", STATE.DISCONNECTED)

  return (
    <div>
        <h1>Contactos:</h1>
        <ContactComponent contact={defaultContact}/>
    </div>
  )
}


export default ListContactComponent;
