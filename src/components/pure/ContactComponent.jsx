import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../models/contact.class';

function ContactComponent({ contact }) {
  return (
    <>
        <div>
            <h2>Nombre: { contact.name }</h2>
            <h2>Apellido: { contact.lastname }</h2>
            <h2>Correo: { contact.email }</h2>
            <h2>Conectado: { contact.conect ? 'En linea': 'No Disponible' }</h2>
        </div>
    </>
  )
}

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
}

export default ContactComponent;