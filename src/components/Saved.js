import React, { Component } from 'react'
import GridList from '@material-ui/core/GridList';
import SavedEvent from './SavedEvent';

export class Saved extends Component {
    render() {
        console.log(this.props.savedEvents)
        return (
          <div style={root}>
            <GridList>
              {this.props.savedEvents.map((savedEvent) => (
                <SavedEvent key={savedEvent.id} savedEvent={savedEvent} delEvent={this.props.delEvent}/>))}
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

export default Saved
