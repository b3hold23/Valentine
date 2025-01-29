import { useState } from "react";
import { DatePicker } from "react-date-picker";

import '../Calendar.css';
import 'react-date-picker/dist/DatePicker.css';


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
    const [date, setDate] = useState(new Date());
    function handleSubmit(e) {
      // Prevent the browser from reloading the page
      e.preventDefault();
  
      // Read the form data
      const form = e.target;
      const formData = new FormData(form);
  
      // Or you can work with it as a plain object:
      const formJson = Object.fromEntries(formData.entries());
      console.log(formJson);
    }
  
    return (
      <form method="post" onSubmit={handleSubmit}>
        <div>
        <hr />
        <header>
          What would you like to do?
        </header>
          <label><input type="radio" name="activityRadio" value="Movies"/> Movies </label>
          <label><input type="radio" name="activityRadio" value="Aquarium"/> Aquarium </label>
          <label><input type="radio" name="activityRadio" value="The Leonardo" /> The Leonardo </label>
          <label><input type="radio" name="activityRadio" value="Zoo" /> The Zoo </label>
        <hr />
        <header>
            Pick a restaurant:
        </header>
          <label><input type="radio" name="myRadio" value="K-pop Fries" /> K-pop Fries </label>
          <label><input type="radio" name="myRadio" value="Olive Garden"  /> Olive Garden </label>
          <label><input type="radio" name="myRadio" value="Ramen" /> Ramen </label>
        <hr />
            <header>
            Pick a day:
            </header>
                <DatePicker
                onChange={setDate}
                value={date}
            />
        <hr />
        <button type="submit">Submit form</button>
        </div>
      </form>
    );
  }

