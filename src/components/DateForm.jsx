import { useState } from "react";
import { DatePicker } from "react-date-picker";
import { useNavigate } from "react-router-dom";

import "../Calendar.css";
import "react-date-picker/dist/DatePicker.css";

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
    const [step, setStep] = useState(1); 
    const [activity, setActivity] = useState("");
    const [restaurant, setRestaurant] = useState("");

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        navigate("/results", {
            state: {
                activity,
                restaurant,
                date: date.toDateString(),
            },
        });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <hr />

                    {step === 1 && (
                        <>
                            <header>What would you like to do?</header>
                            <label>
                                <input type="radio" name="query" value="Movies" onChange={(e) => setActivity(e.target.value)} required />
                                Movies
                            </label>
                            <label>
                                <input type="radio" name="query" value="Aquarium" onChange={(e) => setActivity(e.target.value)} />
                                Aquarium
                            </label>
                            <label>
                                <input type="radio" name="query" value="The Leonardo" onChange={(e) => setActivity(e.target.value)} />
                                The Leonardo
                            </label>
                            <label>
                                <input type="radio" name="query" value="Zoo" onChange={(e) => setActivity(e.target.value)} />
                                The Zoo
                            </label>
                            <label>
                                <input type='radio' name="query" value='Rock Climbing' onChange={(e) => setActivity(e.target.value)} />
                                Rock Climbing
                            </label>
                            <label>
                                <input type="radio" name="query" value="Float" onChange={(e) => setActivity(e.target.value)} />
                                Float
                            </label>
                        </>
                    )}

                    {step === 2 && (
                        <>
                            <header>Pick a restaurant:</header>
                            <label>
                                <input type="radio" name="query3" value="K-pop Fries" onChange={(e) => setRestaurant(e.target.value)} required />
                                K-pop Fries
                            </label>
                            <label>
                                <input type="radio" name="query3" value="Olive Garden" onChange={(e) => setRestaurant(e.target.value)} />
                                Olive Garden
                            </label>
                            <label>
                                <input type="radio" name="query3" value="Ramen" onChange={(e) => setRestaurant(e.target.value)} />
                                Ramen
                            </label>
                            <label>
                                <input type="radio" name="query3" value="Salvadorian" onChange={(e) => setRestaurant(e.target.value)} />
                                Salvadorian
                            </label>
                            <label>
                                <input type="radio" name="query3" value="Brunch" onChange={(e) => setRestaurant(e.target.value)} />
                                Brunch
                            </label>
                        </>
                    )}

                    {step === 3 && (
                        <>
                            <header>When is the Date:</header>
                            <DatePicker onChange={setDate} value={date} />
                        </>
                    )}

                    <hr />

                    {step > 1 && <button type="button" onClick={() => setStep(step - 1)}>Back</button>}
                    {step < 3 && <button type="button" onClick={() => setStep(step + 1)} disabled={step === 1 && !activity || step === 2 && !restaurant}>Next</button>}
                    {step === 3 && <button type="submit">Submit form</button>}
                </div>
            </form>
        </div>
    );
}
