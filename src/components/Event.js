import React, { Component } from 'react'
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Button from '@material-ui/core/Button';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { withStyles } from '@material-ui/core/styles';


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
 
export class Event extends Component {
    infoClick = (e) => {
        e.preventDefault();
        console.log(this.props.event.name)
    }

    saveClick = (e) => {
        e.preventDefault();
        console.log("clicked save")
        this.props.saveEvent(this.props.event)
    }

    checkSaved =(e) => {
        if(this.props.savedEvents.includes(this.props.event)){
            return "Saved"
        }
        return "Add to Saved"
    }
    render() {
        return (
            <GridListTile key={this.props.event.food} cols={1}>
                <img src={this.props.event.pic} alt="test" />

                <GridListTileBar title={this.props.event.food} subtitle={this.props.event.name}
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
                                        <div className="header" style={header}> <h1>{this.props.event.name}</h1> 
                                        {this.props.event.location} || {this.props.event.food} || {this.props.event.date}
                                        </div>
                                        <div className="content">
                                            {' '}
                                            <br/>
                                        {this.props.event.details}
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
                            <Button color='secondary' style={btnStyle} onClick={this.saveClick}>Add to Saved</Button>
                        </div>
                    } />
            </GridListTile>
        )
    }
}

export default Event
