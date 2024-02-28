import React from "react";
import { useParams, Link } from "react-router-dom";
import { useBooks } from "../contexts/BookContext";
import coverImage from "../utils/CoverImage";
import Button from "./smallComponents/Button";
import BookText from "./smallComponents/BookText";
import Background from "./smallComponents/Background";
import Navigation from "./Navigation";
import { WhiteTextLine } from "./smallComponents/TextLines";
import StarMaker from "../utils/StarMaker";
import BookCover from "./smallComponents/BookCover";
import SmallInfoContainer from "./smallComponents/SmallInfoContainer";

// The page that displays a book separately

export default function BookDetails() {
  // Get the book name from the URL
  const { id } = useParams();

  // State containing books
  const { state } = useBooks();
  const { bookArray } = state;

  // Find the URL title from the book array
  const book = bookArray.find((obj) => obj.title === id);
  const {title, series, author, review, stars } = book;

  // Get the cover image
  const imgSrc = coverImage(book);

  const reviewContent = review ? review : <SmallInfoContainer>Review not available</SmallInfoContainer>;

  return (
    <Background>

      <Navigation />

      <div className="m-2">
        <div className="bg-slate-800 rounded-lg w-full md:w-2/3 grid lg:grid-cols-2 mx-auto">

          <BookCover img={imgSrc} />

          <div className="flex flex-col justify-between rounded-br-lg rounded-bl-lg md:rounded-bl-none">
            <div className="p-4 flex flex-col justify-between">
              <div>
                <BookText series={series} title={title} author={author} />
                <StarMaker stars={stars} />
                <WhiteTextLine>{reviewContent}</WhiteTextLine>
              </div>
            </div>

            <div className="bg-slate-700 px-0 py-2 m-0 w-full rounded-br-lg rounded-bl-lg md:rounded-bl-none">
              <Link to={`/`}><Button buttonType="button">Return</Button></Link>
            </div>
          </div>

        </div>
      </div>

    </Background>
  );
}
