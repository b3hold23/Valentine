import { Link } from 'react-router-dom'

import '../App.css'

const YesBtn = () => {
    return (
        <Link to="/Date">
            <button>Yes</button>
        </Link>
    );
}

const NoBtn = () => {
    return (
        <Link to="/Error">
            <button>No</button>
        </Link>
    );
}

const Valentines = () => {
    return (
        <>
        <img src='https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHhyd2NrM3o5Yng0ZGV4MmMzbzhiNHk4bHh5c2ZyeXkwcjVzbjkzNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8DWqa5YOVaNsMiIu0j/giphy.gif'></img>
        <h1>Will You Be My Valentines?</h1>
        <YesBtn /> <NoBtn />
        </>
    );
  }

export default Valentines;
