import React, { Component } from 'react'
import GridList from '@material-ui/core/GridList';
import Event from './Event';


export class Events extends Component {

  render() {
    return (
      <div style={root}>
        <GridList>
          {this.props.events.map((event) => (
            <Event key={event.id} event={event} saveEvent={this.props.saveEvent} />))}
        </GridList>
      </div>

    )
  }
}
const root = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  overflow: 'hidden',
}


export default Events
