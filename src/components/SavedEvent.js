import React, { Component } from 'react'
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Button from '@material-ui/core/Button';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const btnStyle = {
    color: '#fff',
}

const modal = {
    fontSize: "18px",
    background: "#4050b5",
    color: "white",
    textAlign: "center"
}

const header = {
    width: "100%",
    borderBottom: "1px solid gray",
    fontSize: "18px",
    textAlign: "center",
    padding: "5px",
}

const content = {
    width: "100%",
    padding: "10px 5px"
}

const actions = {
    width: "100%",
    padding: "10px 5px",
    margin: "auto",
    textAlign: "center"
}

const closed = {
    cursor: "pointer",
    position: "absolute",
    display: "block",
    padding: "2px 5px",
    lineHeight: "20px",
    right: "-10px",
    top: "-10px",
    fontSize: "24px",
    background: "#4050b5",
    borderRadius: "18px",
    border: "1px solid #cfcece",
  }

export class SavedEvent extends Component {

    delEvent = (e) => {
        e.preventDefault();
        this.props.delEvent(this.props.savedEvent)
    }

    render() {
        return (
            <GridListTile key={this.props.savedEvent.name} cols={1}>
                <img src={this.props.savedEvent.pic} alt="test" />
                
                <GridListTileBar title={this.props.savedEvent.food} subtitle={this.props.savedEvent.location}
                    actionIcon={
                        <div>
                        <Popup
                                trigger={<Button color='secondary' style={btnStyle}>More Info</Button>}
                                modal
                                nested>

                                {close => (
                                    <div className="modal" style={modal}>
                                        <button className="close" onClick={close} style={closed}>
                                            &times;
                                        </button>
                                        <div className="header" style={header}> <h1>{this.props.savedEvent.name}</h1> 
                                        {this.props.savedEvent.location} || {this.props.savedEvent.food} || {this.props.savedEvent.date}
                                        </div>
                                        <div className="content">
                                            {' '}
                                            <br/>
                                        {this.props.savedEvent.details}
                                        </div>
                                        <div className="actions" style={actions}>
                                            <Button
                                                className="button"
                                                onClick={() => {
                                                    console.log('modal closed ');
                                                    close();
                                                }}
                                            >
                                                close
                                                     </Button>
                                        </div>
                                    </div>
                                )}
                            </Popup>
                        <Button color='secondary' style={btnStyle} onClick={this.delEvent}>Remove Event from Saved</Button>
                        </div>
                    } />
                </GridListTile>
        )
    }
}

export default SavedEvent
