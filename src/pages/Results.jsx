import { useLocation, useNavigate } from "react-router-dom";

const ResultsPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { activity, restaurant, date } = location.state || {};

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h2>🎉 Your Date Plan 🎉</h2>
            <p><strong>Activity:</strong> {activity}</p>
            <p><strong>Restaurant:</strong> {restaurant}</p>
            <p><strong>Date:</strong> {date}</p>
            <button onClick={() => navigate("/")}>Plan Another Date</button>
        </div>
    );
};

export default ResultsPage;
