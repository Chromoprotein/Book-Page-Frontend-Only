import React, { useState } from "react";
import "./books.css";
import BookDropDown from "./NavBar";
import BookForm from "./BookForm";
import Book from "./Book";
import { useBooks } from "./BookContext";

export default function Books() {
  // Destructure bookArray from the context state object
  const { state } = useBooks();
  const { bookArray } = state;

  // MENU STUFF

  // Initial selected option for menu
  const [selectedOption, setSelectedOption] = useState("2023");

  const handleYearChange = (e) => {
    setSelectedOption(e.target.value); // Change the year of books that is shown
  };

  // BOOK DISPLAY

  const listBooks = bookArray
    .filter((book) => book.year === selectedOption)
    .map((book, index) => (
      <Book key={index} book={book} />
    ));

  return (
    <div className="bookPageWrapper">
      <div className="navBarWrapper">
        <h1 className="title">List of Books - year {selectedOption}</h1>
        <BookForm />
        <BookDropDown
          selectedOption={selectedOption}
          handleYearChange={handleYearChange}
        />
      </div>
      <div className="allBooksWrapper">{listBooks}</div>
    </div>
  );
}