import { format } from 'date-fns';
import React from 'react';
import styles from './CurrentDay.module.css'

const CurrentDay = props => {
    const {day} = props;
    return (
        <div className={styles['current-day']}>
            <p className={styles['weeks-day']}>{(format(day, 'cccc')).toUpperCase()}</p>
            <p className={styles['day-number']}>{format(day, 'd')}</p>
        </div>
    );
}

export default CurrentDay;
