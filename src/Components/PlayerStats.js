import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import './PlayerStats.css'


class PlayerStats extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerStats: {},
      fullName: ''
    }
  }

  componentDidMount() {
    let url = this.props.match.url;
    let endPoint = '/stats?stats=statsSingleSeason&season=20192020'
    let playerStats = {}
    let fullName = ''

    axios.get(`https://statsapi.web.nhl.com${url}${endPoint}`)
      .then(res => {
        console.log(res.data)
        playerStats = res.data.stats[0].splits[0].stat
        this.setState({ playerStats })
      })
      .then(() => {
        axios.get(`https://statsapi.web.nhl.com${url}`)
          .then(resp => {
            fullName = resp.data.people[0].fullName
            console.log(fullName, playerStats)
            this.setState({
              playerStats,
              fullName
            })

          })
      })

  }

  render() {
    const { fullName } = this.state;
    const {
      goals,
      assists,
      games,
      points,
      plusMinus,
      hits,
      shots,
      timeOnIcePerGame
    } = this.state.playerStats;

    return (
      <div className='stat-container'>
        <h3 className='player-name'>{fullName ? fullName + ' Statistics' : 'Loading...'}</h3>
        <Table striped bordered hover>
          <tbody>
            <tr>
              <td>Goals</td>
              <td>{goals}</td>
              <td>Plus/Minus</td>
              <td>{plusMinus}</td>
            </tr>
            <tr>
              <td>Assists</td>
              <td>{assists}</td>
              <td>Shots</td>
              <td>{shots}</td>
            </tr>
            <tr>
              <td>Points</td>
              <td>{points}</td>
              <td>Body Checks</td>
              <td>{hits}</td>
            </tr>
            <tr>
              <td>Games</td>
              <td >{games}</td>
              <td>Average Time on ice per game</td>
              <td>{timeOnIcePerGame}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    )
  }
}

export default PlayerStats;