import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';

import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import PlayerStats from './Components/PlayerStats';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      team: {}
    }
  }

  componentDidMount() {
    axios.get('https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=san_jose_sharks')
      .then(res => this.setState({ team: res.data.teams[0] }))
      .catch(err => console.log(err))
  }



  render() {
    const { strTeamBadge, strTeamBanner, strTwitter, strWebsite, strYoutube, strFacebook, strInstagram, strStadiumLocation, strDescriptionEN } = this.state.team;
    return (
      <div className="App">
        <Header badge={strTeamBadge}/>
        <Switch>
          <Route exact path='/' render={(routeProps) => (
            <Home
              {...routeProps}
              team={this.state.team}
              description={strDescriptionEN}
            />
            )
          }
          />
          <Route exact path='/api/v1/people/:id' render={(routeProps) => (
            <PlayerStats {...routeProps}/>
          )}/>
        </Switch>
        <Footer
          badge={strTeamBanner}
          twitter={strTwitter}
          website={strWebsite}
          youtube={strYoutube}
          facebook={strFacebook}
          instagram={strInstagram}
          stadiumLocation={strStadiumLocation}
        />
      </div>
    );
  }
}

export default App;
