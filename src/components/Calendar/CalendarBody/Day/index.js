import { format, getMonth } from 'date-fns';
import React from 'react';
import styles from './Day.module.css';
import { withDay } from '../../../../HOCs/withDay';
import cx from 'classnames';

const Day = (props) => {
    const {currentDay, day, changeCurrentDay} = props;
    const cn = cx([styles.days],{
        [styles.current]: format(currentDay, 'd') === format(day, 'd')
    })

    if (getMonth(currentDay)===getMonth(day)){
        return (
            <td className={cn}>
                {format(day, 'd')}
            </td>
        );
    } else {return (<td></td>)}

}

const DayWithDay = withDay(Day);

export default DayWithDay;
