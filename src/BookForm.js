import React, { useState } from "react";
import BookFormContent from "./BookFormContent";
import "./books.css";

export default function BookForm() {

  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  }

  return (
    <div className="formWrapper">
      <button className="formButton" onClick={toggleExpanded}>
        <span>{expanded ? "Cancel" : "Add new book"}</span>
      </button>

      {expanded && (
        <BookFormContent />
      )}
    </div>
  );
}
