import { format } from 'date-fns';
import React from 'react';
import styles from './Day.module.css';
import { withDay } from '../../../../HOCs/withDay';
import cx from 'classnames';

const Day = (props) => {
    const {currentDay, day} = props;
    const cn = cx([styles.days],{
        [styles.current]: format(currentDay, 'd') === format(day, 'd')
    })
    return (
        <td className={cn}>
            {format(day, 'd')}
        </td>
    );
}

const DayWithDay = withDay(Day);

export default DayWithDay;
