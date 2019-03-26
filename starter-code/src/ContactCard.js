import React from 'react'

function ContactCard({contact}) {

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
              <p className="subtitle is-6">{popularity.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>

  )
}

export default ContactCard;