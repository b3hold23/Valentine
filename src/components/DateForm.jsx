import { useState } from "react";
// import { DatePicker } from "react-date-picker";

import '../Calendar.css';
import 'react-date-picker/dist/DatePicker.css';
// import 'react-calendar/dist/Calendar.css';

// const LocateEat = () => {
//     return (
//         <ul>
//                 <p>Test text for button options:</p>
//                 <label><input type="radio" name="Data" value='option 1' />Option 1</label>
//                 <label><input type="radio" name="Data" value='option 2' />Option 2</label>
//                 <label><input type="radio" name="Data" value='option 3' />Option 3</label>
//             </ul>
//     );
// }
// const DatePick = () => {
//     const [date, setDate] = useState(new Date());
    
//     return (
//         <>
//         <header>
//             <h2>Pick a day:</h2>
//         </header>
//         <DatePicker
//         name="data"
//         calendarAriaLabel="Toggle calendar"
//         dayAriaLabel="Day"
//         monthAriaLabel="Month"
//         nativeInputAriaLabel="Date"
//         onChange={setDate}
//         value={date}
//         yearAriaLabel="Year"
//         locale="en-EN"
//         // onCalendarClose={() => console.log(`Calendar closed, date selected: ${data.toDateString()}`)}
//         />
//         </>
//     );
    
// }

// const DateForm = () => {
//     function Publish(formData) {
//         const data = formData.get('data');
//         console.log(`You have selected ${data}`);
//     }

//     return (
//         <form onSubmit={Publish}>
//             <LocateEat />
//             <DatePick />
//             <button type="submit" value='submit'>Submit</button>
//         </form>
//     );
// }
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
         {dateBtn && <MyForm />}
        </div>
    );
}

export default DateNight;

 function MyForm() {
    function handleSubmit(e) {
      // Prevent the browser from reloading the page
      e.preventDefault();
  
      // Read the form data
      const form = e.target;
      const formData = new FormData(form);
  
      // You can pass formData as a fetch body directly:
      fetch('/some-api', { method: form.method, body: formData });
  
      // Or you can work with it as a plain object:
      const formJson = Object.fromEntries(formData.entries());
      console.log(formJson);
    }
  
    return (
      <form method="post" onSubmit={handleSubmit}>
        <label>
          Text input: <input name="myInput" defaultValue="Some initial value" />
        </label>
        <hr />
        <label>
          Checkbox: <input type="checkbox" name="myCheckbox" defaultChecked={true} />
        </label>
        <hr />
        <p>
          Radio buttons:
          <label><input type="radio" name="myRadio" value="option1" /> Option 1</label>
          <label><input type="radio" name="myRadio" value="option2" defaultChecked={true} /> Option 2</label>
          <label><input type="radio" name="myRadio" value="option3" /> Option 3</label>
        </p>
        <hr />
        <button type="reset">Reset form</button>
        <button type="submit">Submit form</button>
      </form>
    );
  }

