import React from 'react';
import Month from './Month';

const CalendarBody = () => {
    
    const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

    return (
        <table>
            <thead>
                <tr>
                    {weekDays.map((day, index)=><td key={index}>{day}</td>)}
                </tr>
            </thead>
        <Month month='11' />
        </table>
    );
}

export default CalendarBody;
