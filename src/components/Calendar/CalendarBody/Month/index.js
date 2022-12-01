import { getWeeksInMonth, getWeek, getYear } from 'date-fns';
import React from 'react';
import Week from '../Week';
import styles from './Month.module.css';

const Month = () => {

    const numberOfWeewsInMonth = getWeeksInMonth(new Date());
    const currentYear = getYear(new Date());
    const weeksNumber = getWeek(new Date());
    const weeks = new Array(numberOfWeewsInMonth).fill(null).map((el, index)=>
        <Week key={index} year={currentYear} week={weeksNumber+index} />);
    return (
        <tbody className={styles.days}>
            {weeks}
        </tbody>
    );
}

export default Month;
