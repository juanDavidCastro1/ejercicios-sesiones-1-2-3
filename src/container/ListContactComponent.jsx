import  { React, useState } from 'react'
import ContactComponent from '../components/pure/ContactComponent';
import { Contact } from '../models/contact.class';
import { STATE } from '../models/state.enum';

function ListContactComponent() {

    const [state, setState] = useState(STATE.DISCONNECTED);

    const stateChange = ()=>{
        setState( state ? STATE.DISCONNECTED : STATE.CONNECTED);
    }

    const defaultContact = new Contact("Juan", "David", "example@email.com", state)

  return (
    <div>
        <h1>Contactos:</h1>
        <ContactComponent contact={defaultContact}/>
        <button onClick={stateChange}>Cambiar estado</button>
    </div>
  )
}


export default ListContactComponent;
