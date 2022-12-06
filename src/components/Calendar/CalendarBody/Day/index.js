import { format, getMonth, getDayOfYear } from 'date-fns';
import React from 'react';
import styles from './Day.module.css';
import { withDay } from '../../../../HOCs/withDay';
import cx from 'classnames';

const Day = (props) => {
    const { currentDay, day, changeCurrentDay } = props;
    const cn = cx([styles.days], {
        [styles.current]: getDayOfYear(currentDay)===getDayOfYear(day),
        [styles.today]: getDayOfYear(new Date())===getDayOfYear(day)
    });

    const changeDay = () => {
        const newCurrentDay = day;
        changeCurrentDay(newCurrentDay);
    }

    if (getMonth(currentDay) === getMonth(day)) {
        return (
            <td className={cn} onClick={changeDay}>
                {format(day, 'd')}
            </td>
        );
    } else { return (<td></td>) }

}

const DayWithDay = withDay(Day);

export default DayWithDay;
