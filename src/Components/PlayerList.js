import React, { Component } from 'react';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

const PlayerList = ({players, history}) => {

  const routeToStats = (link) => {
    console.log(history, link)
  }
  return (
    <div >
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Jersey #</th>
            <th>Full Name</th>
            <th>Position</th>
            <th>Stats</th>
          </tr>
        </thead>
        <tbody>
          {
            players.map(player => (
              <tr>
                <td>{player.jerseyNumber}</td>
                <td>{player.person.fullName}</td>
                <td>
                  {player.position.name}
                </td>
                <td>
                  <Button onClick={() => history.push(player.person.link)} variant='secondary'>Get Stats</Button>
                </td>
              </tr>
            ))
          }

        </tbody>
      </Table>

    </div>
  )
}

export default withRouter(PlayerList)