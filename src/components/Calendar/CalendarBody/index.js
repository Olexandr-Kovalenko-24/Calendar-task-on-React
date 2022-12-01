import { format } from 'date-fns';
import React from 'react';
import Month from './Month';
import styles from './CalendarBody.module.css'

const CalendarBody = () => {
    
    const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

    return (
        <table className={styles['calendar-body']}>
            <caption className={styles['month-year']}>
                {(format(new Date(), 'MMMM Y')).toUpperCase()}
            </caption>
            <thead>
                <tr className={styles['day-of-week']}>
                    {weekDays.map((day, index)=><td key={index}>{day}</td>)}
                </tr>
            </thead>
        <Month />
        </table>
    );
}

export default CalendarBody;
