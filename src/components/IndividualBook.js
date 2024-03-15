import React from "react";
import coverImage from "./smallComponents/CoverImage";
import BookText from "./BookText";
import { VscLibrary } from "react-icons/vsc";
import StarMaker from "./smallComponents/StarMaker";
import BookCover from "./smallComponents/BookCover";
import LinkButton from "./smallComponents/LinkButton";

export default function IndividualBook({ book: { id, title, series, author, imgSrc, stars, year } }) {

  // Cover image or placeholder
  const cover = coverImage({ id, title, series, author, imgSrc, stars, year });

  return (
    <div className="bg-slate-800 rounded-lg w-96 max-w-full basis-1/3 md:h-96">
      <div className="grid md:grid-cols-2 h-full">

        <BookCover img={cover} />

        <div className="flex flex-col justify-between gap-1">
          <BookText series={series} title={title} author={author} year={year} />
          <StarMaker stars={stars} />
          <div className="mb-2">
            <LinkButton url={`/book/${encodeURIComponent(id)}`}>
              <VscLibrary /> Details
            </LinkButton>
          </div>
        </div>

      </div>
    </div>
  );
}
