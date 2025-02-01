import { useState } from "react";
import { DatePicker } from "react-date-picker";
import { useNavigate } from "react-router-dom";

import '../Calendar.css';
import 'react-date-picker/dist/DatePicker.css';

const DateNight = () => {
    const [dateBtn, setDateBtn] = useState(false);

    const handleClick = () => {
        setDateBtn(!dateBtn);
    };

    return (
        <div>
            <button onClick={handleClick}>
                {dateBtn ? "Close" : "❤️ Click here to start planning your date ❤️"}
            </button>
            {dateBtn && <MyForm />}
        </div>
    );
};

export default DateNight;

function MyForm() {
    const [date, setDate] = useState(new Date());
    const navigate = useNavigate(); // Hook for navigation

    function handleSubmit(e) {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        const query = formData.get("query");
        const query3 = formData.get("query3");

        // Navigate to results page with selected options
        navigate("/results", {
            state: {
                activity: query,
                restaurant: query3,
                date: date.toDateString(),
            },
        });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <hr />
                    <header>What would you like to do?</header>
                    <label><input type="radio" name="query" value="Movies" required /> Movies </label>
                    <label><input type="radio" name="query" value="Aquarium" /> Aquarium </label>
                    <label><input type="radio" name="query" value="The Leonardo" /> The Leonardo </label>
                    <label><input type="radio" name="query" value="Zoo" /> The Zoo </label>

                    <hr />
                    <header>Pick a restaurant:</header>
                    <label><input type="radio" name="query3" value="K-pop Fries" required /> K-pop Fries </label>
                    <label><input type="radio" name="query3" value="Olive Garden" /> Olive Garden </label>
                    <label><input type="radio" name="query3" value="Ramen" /> Ramen </label>

                    <hr />
                    <header>Pick a day:</header>
                    <DatePicker onChange={setDate} value={date} />

                    <hr />
                    <button type="submit">Submit form</button>
                </div>
            </form>
        </div>
    );
}
