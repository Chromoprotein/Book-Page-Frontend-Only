import React from "react";
import { useParams, Link } from "react-router-dom";
import { useBooks } from "../contexts/BookContext";
import { useState } from "react";
import coverImage from "../utils/CoverImage";
import Button from "./smallComponents/Button";
import BookText from "./smallComponents/BookText";

// The page that displays a book separately

export default function BookDetails() {
  // Get the book name from the URL
  const { id } = useParams();

  // State containing books
  const { state } = useBooks();
  const { bookArray } = state;

  // Find the URL title from the book array
  const book = bookArray.find((obj) => obj.title === id);
  const {title, series, author, review } = book;

  // Get the cover image
  const imgSrc = coverImage(book);

  // Toggle review visibility
  const [showReview, setShowReview] = useState(false);
  const toggleReview = () => {
    setShowReview(!showReview);
  };
  const reviewButton = review ? 
    <div className="moreInfoButtonWrapper">
      <Button buttonType="button" buttonOnClick={toggleReview}>{showReview ? "Hide Review" : "Show Review"}</Button>
    </div>
    :
    "Review not available";
  const reviewContent = showReview &&
    <div className="bookText">
      <span>{review}</span>
    </div>

  return (
    <div class="bookDetails">

      <h2 class="title">Book Details - {title}</h2>

      <div className="bookCardBase largeBookCard">

        <img src={imgSrc} alt="Book cover" className="coverImgDetailsPage" />

        <BookText series={series} title={title} author={author} />

        {reviewContent}

        {reviewButton}

      </div>

      <Link to={`/`}><Button buttonType="button">Return</Button></Link>
    </div>
  );
}
