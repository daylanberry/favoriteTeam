import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import './Home.css'
import axios from 'axios';

import PlayerList from './PlayerList'

// destructuring array of pictures and renaming each image
const Home = ({ team: { strTeamFanart1: image1, strTeamFanart2: image2, strTeamFanart3: image3, strTeamFanart4: image4 }, history, description}) => {

  const pictureArray = image1 ? [image1, image2, image3, image4] : []
  const [players, setPlayers] = useState([])
  const caption = description ? description.split('.').slice(0, 2).join('. ') : 'Loading'


  useEffect(() => {
    axios.get('https://statsapi.web.nhl.com/api/v1/teams/28/roster')
      .then(res => setPlayers(res.data.roster))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className='carousel-container'>

        <Carousel >
        {
          pictureArray.map(picture => (
            <Carousel.Item>
              <img
                className="carousel-img"
                src={picture}
                alt="First slide"
              />
            </Carousel.Item>
          ))
        }
        <Carousel.Caption>
          <h3 className='caption-title'>Your Sharks!</h3>
          <p>{caption}</p>
      </Carousel.Caption>
        </Carousel>

        <div className='description-block'>
          <PlayerList players={players}/>
        </div>
    </div>
  )
}

export default Home