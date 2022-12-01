import React, { Component } from 'react';
import CurrentDay from './CurrentDay';
import CalendarBody from './CalendarBody';
import styles from './Calendar.module.css';
import DayContext from '../../context/DayContext';

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDay: new Date()
        }
    }

    changeCurrentDay = (day) => {
        this.setState ({
            currentDay: day 
        })
    }

    render() {
        const { currentDay } = this.state;
        return (
            <DayContext.Provider value={[currentDay, this.changeCurrentDay]}>
            <div className={styles.position}>
                <div className={styles.wrapper}>
                    <CurrentDay day={currentDay} />
                    <CalendarBody />
                </div>
            </div>
            </DayContext.Provider>
        );
    }
}

export default Calendar;
