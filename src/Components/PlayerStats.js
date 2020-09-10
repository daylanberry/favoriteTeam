import React, { Component } from 'react';
import axios from 'axios';


class PlayerStats extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerStats: {}
    }
  }

  componentDidMount() {
    let url = this.props.match.url;
    let endPoint = '/stats?stats=statsSingleSeason&season=20192020'

    axios.get(`https://statsapi.web.nhl.com${url}${endPoint}`)
      .then(res => {
        let playerStats = res.data.stats[0].splits[0].stat
        this.setState({ playerStats })
      })

  }

  render() {
    return (
      <div>
        stats
      </div>
    )
  }
}

export default PlayerStats;