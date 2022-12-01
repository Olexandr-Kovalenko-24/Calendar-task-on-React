import React, { Component } from 'react';
import CurrentDay from './CurrentDay';
import CalendarBody from './CalendarBody';
import styles from './Calendar.module.css';

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDay: new Date()
        }
    }

    render() {
        const { currentDay } = this.state;
        return (
            <div className={styles.position}>
                <div className={styles.wrapper}>
                    <CurrentDay day={currentDay} />
                    <CalendarBody />
                </div>
            </div>
        );
    }
}

export default Calendar;
