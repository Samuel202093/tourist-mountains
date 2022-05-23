import React from 'react'
import  '../style.css'


const Mountcard = (props) => {
    const {id, title, location, googleMapsUrl,startDate, endDate, description, imageUrl, coverimg, img} = props.mountData
  return (
    <section className='mountSection'>
      <div className='img--container'>
        <img src={img} alt="" />
      </div>  
        <div className='mountInfo'>
            <h1>{title}</h1>
            <h3>Location: {location}</h3>
            <span>{startDate} - {endDate}</span>
            <p>{description}</p>
        </div>
    </section>
  )
}

export default Mountcard