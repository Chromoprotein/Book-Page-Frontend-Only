import React from "react";
import { Link } from "react-router-dom";
import Button from "./smallComponents/Button";
import coverImage from "../utils/CoverImage";
import BookText from "./smallComponents/BookText";

export default function Book({ book: { title, series, author, imgSrc } }) {

  // Cover image or placeholder
  const cover = coverImage({ title, series, author, imgSrc });

  return (
    <div className="bookCardBase smallBookCard">

      <img src={cover} alt="Book cover" className="coverImg" />

      <BookText series={series} title={title} author={author} />

      <div className="moreInfoButtonWrapper">
        <Link to={`/book/${encodeURIComponent(title)}`}><Button buttonType="button">View Details</Button></Link>
      </div>

    </div>
  );
}
