import React from 'react'
import './Card.css'
import myImage from '../../assets/profile-thumbnail.png';

const Card = props => {
  return (
    <div className="app-container">
      <div className="elevated-card">
        <div className="profile-container">
          <img src={myImage} className='round-image' />
          <span className='info-container'>
            <span className='title-container'>Sarah Dole</span>
            <span className='handle-container'>@sarahdole</span>
          </span>
        </div>
        <p className='desc-container'>I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!</p>
      </div>
    </div>
  )
}

export default Card