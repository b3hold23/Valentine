import { useState } from 'react';
import Calendar from 'react-calendar';

import '../Calendar.css';
// import 'react-calendar/dist/Calendar.css';

const DateCalendar = () => {
    const { date, dateChange } = useState(new Date());

    function onChange(nextDate) {
        dateChange(nextDate);
    }

    return (
        <div className='Sample'>
            <header>
                <h1>Calendar Test</h1>
            </header>
            <div className='Sample-container'>
                <main className='Sample_container_content'>
                    <Calendar calendarType='gregory' onChange={onChange} value={date} />
                </main>
            </div>
        </div>
    );
}

export default DateCalendar;