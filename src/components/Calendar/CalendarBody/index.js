import { format } from 'date-fns';
import React from 'react';
import Month from './Month';
import styles from './CalendarBody.module.css'

const CalendarBody = () => {

    return (
        <table className={styles['calendar-body']}>
            <caption className={styles['month-year']}>
                {(format(new Date(), 'MMMM Y')).toUpperCase()}
            </caption>
            <Month />
        </table>
    );
}

export default CalendarBody;
