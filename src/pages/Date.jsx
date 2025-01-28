import { useState } from "react";
import { DatePicker } from "react-date-picker";


import DateForm from "../components/DateForm";
import 'react-date-picker/dist/DatePicker.css';
import '../Calendar.css';

const DateDay = () => {
    const [date, setDate] = useState(new Date());

    return (
        <>
        <header>
            You selected
        </header>
        <DatePicker
        calendarAriaLabel="Toggle calendar"
        dayAriaLabel="Day"
        monthAriaLabel="Month"
        nativeInputAriaLabel="Date"
        onChange={setDate}
        value={date}
        yearAriaLabel="Year"
        />
        </>
    );
}

const DateNight = () => {
    return (
        <>
        <img src='https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaTlnYXVsZWV6dmY0NDQ4MTMwYW43Y2JueGN1cjQzeXdpMmttOWFreiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/d3MM4vAejYomlzGg/giphy.gif'></img>

        <h1>Initial wording test</h1>
        <DateForm />
        <DateDay />
        
        </>
    )
}

export default DateNight;

