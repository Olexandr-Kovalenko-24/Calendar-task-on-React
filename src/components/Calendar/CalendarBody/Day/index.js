import { format } from 'date-fns';
import React from 'react';

const Day = (props) => {
    const {day} = props;
    return (
        <td>
            {format(day, 'd')}
        </td>
    );
}

export default Day;
