import { getWeeksInMonth, getWeek, getYear } from 'date-fns';
import React from 'react';
import Week from '../Week';

const Month = () => {

    const numberOfWeewsInMonth = getWeeksInMonth(new Date());
    const currentYear = getYear(new Date());
    const weeksNumber = getWeek(new Date());
    const weeks = new Array(numberOfWeewsInMonth).fill(null).map((el, index)=>
        <Week key={index} year={currentYear} week={weeksNumber+index} />);
    return (
        <tbody>
            {weeks}
        </tbody>
    );
}

export default Month;

// week={addWeeks(weeksNumber, index)}

{/* <Week year='2022' week='1' />
<Week year='2022' week='2' />
<Week year='2022' week='3' />
<Week year='2022' week='4' /> */}