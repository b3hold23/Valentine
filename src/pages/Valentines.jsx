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
        <h1>Will You Be My Valentines?</h1>
        <YesBtn /> <NoBtn />
        </>
    );
  }

export default Valentines;
