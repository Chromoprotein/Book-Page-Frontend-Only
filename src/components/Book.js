import React from "react";
import { Link } from "react-router-dom";
import Button from "./smallComponents/Button";
import coverImage from "../utils/CoverImage";
import BookText from "./smallComponents/BookText";
import { VscEdit } from "react-icons/vsc";
import { VscLibrary } from "react-icons/vsc";
import StarMaker from "../utils/StarMaker";
import BookCover from "./smallComponents/BookCover";

export default function Book({ book: { title, series, author, imgSrc, stars } }) {

  // Cover image or placeholder
  const cover = coverImage({ title, series, author, imgSrc, stars });

  return (
    <div className="bg-slate-800 rounded-lg w-96 max-w-full basis-1/3 md:h-96">
      <div className="grid md:grid-cols-2 h-full">

        <BookCover img={cover} />

        <div className="flex flex-col justify-between gap-1">
          <BookText series={series} title={title} author={author} />
          <StarMaker stars={stars} />
          <div className="mb-2">
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
  );
}
