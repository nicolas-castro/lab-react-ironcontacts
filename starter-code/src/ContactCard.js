import React from 'react'
import CoolButton from './CoolButton';

function ContactCard({contact, deleteMethod, index}) {

  const {pictureUrl, name, popularity} = contact

  return  (
     
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img src={pictureUrl}/>
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">{name}</p>
              <p className="subtitle is-6">{popularity.toFixed(2)}  <CoolButton nameOfClass="button is-danger" onClick={ () => deleteMethod(index) } btnName="Delete" /> </p>
            
            </div>
          </div>
        </div>
      </div>

  )
}

export default ContactCard;