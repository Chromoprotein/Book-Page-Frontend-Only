import "./books.css";

export default function MoreInfoButton({ showReview, toggleReview }) {
  return (
    <div>
      <button type="button" className="infoButton" onClick={toggleReview}>
        {showReview ? "Hide review" : "See review"}
      </button>
    </div>
  );
}
