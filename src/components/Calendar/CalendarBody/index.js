import { format } from 'date-fns';
import React from 'react';
import Month from './Month';

const CalendarBody = () => {
    
    const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

    return (
        <table>
            <caption>
                {format(new Date(), 'MMMM Y')}
            </caption>
            <thead>
                <tr>
                    {weekDays.map((day, index)=><td key={index}>{day}</td>)}
                </tr>
            </thead>
        <Month />
        </table>
    );
}

export default CalendarBody;
