import React from 'react';
import { Table } from 'react-bootstrap';
import { ReactComponent as Facebook} from '../assets/fb.svg';
import { ReactComponent as Instagram } from '../assets/ig.svg';
import { ReactComponent as Twitter } from '../assets/twitter.svg';
import { ReactComponent as Youtube } from '../assets/youtube.svg';

const SocialMedia = ({ instagram, youtube, facebook, twitter, history }) => {

  const routeToSite = (component, link) => {
    let url = `https://${link}`
    return (
      <td>
      <a href={url}>
        {component}
      </a>
      </td>
    )
  }

  return (
    <div style={{bottom: '5px'}}>
      <Table borderless>
        <tbody>
          <tr>
            {routeToSite(<Facebook />, facebook)}
            {routeToSite(<Instagram />, instagram)}
          </tr>
          <tr>
            {routeToSite(<Twitter/>, twitter)}
            {routeToSite(<Youtube />, youtube)}
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default SocialMedia