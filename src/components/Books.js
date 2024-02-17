import React, { useState } from "react";
import "../styles/output.css";
import { Link } from "react-router-dom";
import Button from "./smallComponents/Button";
import Book from "./Book";
import { useBooks } from "../contexts/BookContext";
import { DropDownElement } from "./smallComponents/InputElement";
import { yearsArray } from "../utils/yearsArray";

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
    <div className="bg-slate-700">

      {/*<div className="navBarWrapper">
        <h1 className="title">List of Books - year {selectedOption}</h1>
        <Link to={`/upload`}><Button buttonType="button">Add Book</Button></Link>
        <DropDownElement text="Select year" options={yearsArray} selectedOption={selectedOption} eventHandler={handleYearChange} />
      </div>*/}

      <div className="flex flex-col md:flex-row flex-wrap gap-3 place-content-center">
        {listBooks}
      </div>

    </div>
  );
}