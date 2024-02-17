import React from "react";
import { Link } from "react-router-dom";
import Button from "./smallComponents/Button";
import coverImage from "../utils/CoverImage";
import BookText from "./smallComponents/BookText";

export default function Book({ book: { title, series, author, imgSrc } }) {

  // Cover image or placeholder
  const cover = coverImage({ title, series, author, imgSrc });

  return (
    <div className="bg-slate-800 md:m-3 md:basis-1/3">
      <div className="grid grid-cols-2">
        <img src={cover} alt="Book cover" className="mx-auto h-60 md:h-80 opacity-80" />
        <div className="flex flex-col justify-between">
          <BookText series={series} title={title} author={author} />
          <div>
            <Link to={`/book/${encodeURIComponent(title)}`}><Button buttonType="button">View Details</Button></Link>
            <Link to={`/edit/${encodeURIComponent(title)}`}><Button buttonType="button">Edit</Button></Link>
          </div>
        </div>
      </div>
    </div>
    /*<div className="bg-slate-800 md:m-3 md:basis-1/3 flex flex-col justify-between">
      <div>
        <div className="bg-slate-900">
          <img src={cover} alt="Book cover" className="mx-auto h-60 md:h-80 opacity-80" />
        </div>
        <BookText series={series} title={title} author={author} />
      </div>

      <div className="">
        <Link to={`/book/${encodeURIComponent(title)}`}><Button buttonType="button">View Details</Button></Link>
        <Link to={`/edit/${encodeURIComponent(title)}`}><Button buttonType="button">Edit</Button></Link>
      </div>

    </div>*/
  );
}
