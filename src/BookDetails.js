import React from "react";
import { useParams } from "react-router-dom";
import { useBooks } from "./BookContext";
import BookTextWrapper from "./BookTextWrapper";
import { useState } from "react";
import MoreInfoButton from "./MoreInfoButton";
import coverImage from "./CoverImage";

export default function BookDetails() {
  const { id } = useParams(); // is actually a title
  const { state } = useBooks();
  const { bookArray } = state;

  const book = bookArray.find((obj) => obj.title === id);

  const imgSrc = coverImage(book);

  let reviewToShow = book.review;
  if (!book.review) {
      reviewToShow = "Review not available";
  }

  const [showReview, setShowReview] = useState(false); // Initial selected option

  const toggleReview = () => {
    setShowReview(!showReview); // Toggle the review value
  };

  return (
    <div class="bookDetails">
      <h2 class="title">Book Details - {id}</h2>
      <div className="bookCardBase largeBookCard">
        <img src={imgSrc} alt="Book cover" className="coverImgDetailsPage" />
        <BookTextWrapper>
          <span>{book.title}</span>
          {book.series && <span> ({book.series}) </span>}
          <span> by {book.author}</span>
        </BookTextWrapper>
        {showReview && (
          <BookTextWrapper>
            <span>{reviewToShow}</span>
          </BookTextWrapper>
        )}
        <div className="moreInfoButtonWrapper">
          <MoreInfoButton showReview={showReview} toggleReview={toggleReview} />
        </div>
      </div>
    </div>
  );
}
