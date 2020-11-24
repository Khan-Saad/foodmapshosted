import React, { Component } from 'react'

export class CreateEvent extends Component {
    state= {
        eventName: '',
        location: '',
        food: '',
        details:'',
        date:''
    }
    
    onChange = (e) => this.setState({ [e.target.name]: e.target.value});
     
    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.title!== '' && this.state.eventName!== '' && this.state.location!== '' && this.state.food!== '' && this.state.details!== '' && this.state.date!== ''){
            this.props.addEvent(this.state);
            this.setState({ eventName: ''});
            this.setState({ location: ''});
            this.setState({ food: ''});
            this.setState({ details: ''});
            this.setState({ date:''});
        }

    }

    render() {
        return (
            <div>
                <h4>Fill out the details for your event and hit Create!</h4>
                <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                <input 
                type="text" 
                name="eventName"
                style={{ flex: '10', padding: '5px'}} 
                placeholder="Enter Event Name"
                value={this.state.eventName}
                onChange={this.onChange}/>
                <br/>
                <input 
                type="text" 
                name="location"
                style={{ flex: '10', padding: '5px'}} 
                placeholder="Enter Event Location"
                value={this.state.location}
                onChange={this.onChange}/>
                <br/>
                <input 
                type="text" 
                name="food"
                style={{ flex: '10', padding: '5px'}} 
                placeholder="Enter Food at Event"
                value={this.state.food}
                onChange={this.onChange}/>
                <br/>
                <input 
                type="text" 
                name="date"
                style={{ flex: '10', padding: '5px'}} 
                placeholder="Enter Date"
                value={this.state.date}
                onChange={this.onChange}/>
                <input 
                type="text" 
                name="details"
                style={{ flex: '10', padding: '5px'}} 
                placeholder="Enter Event Details"
                value={this.state.details}
                onChange={this.onChange}/>
                <br/>

                <input 
                type="submit" 
                value="Create Event!" 
                className="btn"
                style={{flex: '1'}} 
                />
                </form>
            </div>
        )
    }
}

export default CreateEvent