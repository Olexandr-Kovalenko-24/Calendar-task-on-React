import React from "react";
import DayContext from "../context/DayContext";

export const withDay = (Component) => (props) => (
    <DayContext.Consumer>
        {([currentDay, changeCurrentDay]) => {
            return <Component currentDay={currentDay} changeCurrentDay={changeCurrentDay} {...props} />
        }}
    </DayContext.Consumer>
);