import { useState } from "react";
import { DatePicker } from "react-date-picker";

import '../Calendar.css';
import 'react-date-picker/dist/DatePicker.css';
// import 'react-calendar/dist/Calendar.css';

const LocateDate = () => {
    return (
        <div>
            <h2>Where would you like to go?</h2>
            <input type="text" placeholder="Location" />
        </div>
    );
}
const DateDay = () => {
    const [date, setDate] = useState(new Date());
    
    return (
        <>
        <header>
            <h2>Plan your date:</h2>
        </header>
        <DatePicker
        calendarAriaLabel="Toggle calendar"
        dayAriaLabel="Day"
        monthAriaLabel="Month"
        nativeInputAriaLabel="Date"
        onChange={setDate}
        value={date}
        yearAriaLabel="Year"
        locale="en-EN"
        onCalendarClose={() => console.log(`Calendar closed, date selected: ${date.toDateString()}`)}
        />
        </>
    );
    
}
const DateNight = () => {
    const [dateBtn, startDateBtn] = useState(false);

    const HandleClick = () => {
        startDateBtn(!dateBtn);
    };

    return (
        <div>
         <button onClick={HandleClick}>
            {dateBtn ? "Close" : "❤️ Click here to start planning your date ❤️"}
         </button>
         {dateBtn && <DateDay />}
        </div>
    );
}

export default DateNight;

