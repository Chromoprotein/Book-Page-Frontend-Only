import React from "react";
import { Link } from "react-router-dom";
import Button from "./smallComponents/Button";
import coverImage from "../utils/CoverImage";
import BookText from "./smallComponents/BookText";
import { VscEdit } from "react-icons/vsc";
import { VscLibrary } from "react-icons/vsc";
import StarMaker from "../utils/StarMaker";

export default function Book({ book: { title, series, author, imgSrc, stars } }) {

  // Cover image or placeholder
  const cover = coverImage({ title, series, author, imgSrc, stars });

  return (
    <div className="md:basis-1/2 bg-slate-800 m-3 rounded-lg max-w-96 md:h-36 lg:h-96">
      <div className="grid grid-cols-2 h-full">

        <img src={cover} alt="Book cover" className="rounded-l-lg h-full opacity-80 object-cover" />

        <div className="flex flex-col justify-between p-3">
          <BookText series={series} title={title} author={author} />
          <StarMaker stars={stars} />
          <div>
            <Link to={`/book/${encodeURIComponent(title)}`}>
              <Button buttonType="button">
                  <VscLibrary /> Details
              </Button>
            </Link>
            <Link to={`/edit/${encodeURIComponent(title)}`}>
              <Button buttonType="button">
                  <VscEdit /> Edit
              </Button>
            </Link>
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
