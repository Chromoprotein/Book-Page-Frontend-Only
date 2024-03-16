import React from "react";
import { useParams } from "react-router-dom";
import { useBooks } from "../contexts/BookContext";
import coverImage from "./smallComponents/CoverImage";
import BookText from "./BookText";
import Background from "./smallComponents/Background";
import Navigation from "./Navigation";
import WhiteTextLine from "./smallComponents/WhiteTextLine";
import StarMaker from "./smallComponents/StarMaker";
import BookCover from "./smallComponents/BookCover";
import SmallInfoContainer from "./smallComponents/SmallInfoContainer";
import { VscEdit } from "react-icons/vsc";
import LinkButton from "./smallComponents/LinkButton";

// The page that displays a book separately

export default function BookDetails() {
  // Get the book name from the URL
  const { id } = useParams();

  // State containing books
  const { state } = useBooks();
  const { bookArray } = state;

  // Find the URL title from the book array
  const book = bookArray.find((obj) => obj.id === id);
  const {title, series, author, review, stars, year, genre } = book;

  // Get the cover image
  const imgSrc = coverImage(book);

  const reviewContent = review ? review : <SmallInfoContainer>Review not available</SmallInfoContainer>;

  return (
    <Background>

      <Navigation />

      <main className="m-2">
        <div className="bg-slate-800 rounded-lg w-full md:w-2/3 grid lg:grid-cols-2 mx-auto">

          <figure>
            <BookCover img={imgSrc} />
          </figure>

          <article className="flex flex-col justify-between rounded-br-lg rounded-bl-lg md:rounded-bl-none">
            <div className="p-4 flex flex-col justify-between">
              <div>
                <BookText series={series} title={title} author={author} year={year} genre={genre.charAt(0).toUpperCase() + genre.slice(1)} />
                <StarMaker stars={stars} />
                <section>
                  <WhiteTextLine>{reviewContent}</WhiteTextLine>
                </section>
              </div>
            </div>

            <nav className="bg-slate-700 px-0 py-2 m-0 w-full rounded-br-lg rounded-bl-lg md:rounded-bl-none flex flex-row flex-wrap gap-1 justify-center">
              <LinkButton url={`/edit/${encodeURIComponent(id)}`}>
                <VscEdit /> Edit
              </LinkButton>
              <LinkButton url={`/`}>
                Return
              </LinkButton>
            </nav>
          </article>

        </div>
      </main>

    </Background>
  );
}
