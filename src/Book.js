import React from "react";
import BookTextWrapper from "./BookTextWrapper";
import { Link } from "react-router-dom";
import coverImage from "./CoverImage";

export default function Book({ book }) {
  const imgSrc = coverImage(book);

  return (
    <div className="bookCard">
      <img src={imgSrc} alt="Book cover" className="coverImg" />
      <BookTextWrapper>
        <span>{book.title}</span>
        {book.series && <span> ({book.series}) </span>}
        <span> by {book.author}</span>
      </BookTextWrapper>
      <div className="moreInfoButtonWrapper">
        <Link to={`/book/${book.title}`} className="buttonLink">
          View Details
        </Link>
      </div>
    </div>
  );
}
