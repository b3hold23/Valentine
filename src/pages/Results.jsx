import { useLocation, useNavigate } from "react-router-dom";

const ResultsPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { activity, restaurant, date } = location.state || {};

    return (
        <div className="results-container">
            <h2 className="results-header">💖 Your Perfect Date Night 💖</h2>
            <div className="results-card">
                <p className="results-text">
                    <strong>🌸 Activity: </strong> <span className="highlight">{activity}</span>
                </p>
                <p className="results-text">
                    <strong>🍽️ Restaurant: </strong> <span className="highlight">{restaurant}</span>
                </p>
                <p className="results-text">
                    <strong>📅 Date: </strong> <span className="highlight">{date}</span>
                </p>
                <p className="message">✨ Get ready for an unforgettable night! ✨</p>
            </div>
            <button className="results-button" onClick={() => navigate("/")}>💌 Plan Another Date</button>
        </div>
    );
};

export default ResultsPage;
