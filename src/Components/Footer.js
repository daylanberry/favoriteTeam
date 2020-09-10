import React from 'react';
import './Footer.css';
import SocialMedia from './SocialMedia'

const Footer = ({ badge, twitter, website, youtube, facebook, instagram, stadiumLocation, history }) => {

  const getTeamWebsite = () => {
    let team;
    if (website) {
      team = website.split('.')[0]
    }
    return team
  }

  return (
    <div className='footer'>
      <div className='image-container'>
          <span className='location'>{stadiumLocation}</span>
          <div>
            <a
              href={`https://www.nhl.com/${getTeamWebsite()}`}
              className='website-link'
            >
              Official Website
            </a>
          </div>
      </div>
      <img className='image' src={badge} />
      <div className='social-media'>
        <SocialMedia
          twitter={twitter}
          youtube={youtube}
          facebook={facebook}
          instagram={instagram}
        />
      </div>
    </div>
  )
}

export default Footer