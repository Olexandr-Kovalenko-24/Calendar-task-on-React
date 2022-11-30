import React, { Component } from 'react';
import CurrentDay from './CurrentDay';
import CalendarBody from './CalendarBody';

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDay: new Date()
        }
    }
    
    render() {
        const {currentDay} = this.state;
        return (
            <div>
                <CurrentDay day={currentDay} />
                <CalendarBody />
            </div>
        );
    }
}

export default Calendar;
