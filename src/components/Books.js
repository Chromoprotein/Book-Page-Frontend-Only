import React, { useState } from "react";
import "../styles/output.css";
import Book from "./Book";
import { useBooks } from "../contexts/BookContext";
import Navigation from "./Navigation";

export default function Books() {
  // Destructure bookArray from the context state object
  const { state } = useBooks();
  const { bookArray } = state;

  // Navigation logic
  const [selectedOption, setSelectedOption] = useState("2023");
  // Change the year of books that is shown
  const handleYearChange = (option) => {
      setSelectedOption(option); 
  };

  const listBooks = bookArray
      .filter((book) => book.year === selectedOption)
      .map((book, index) => (
      <Book key={index} book={book} />
  ));


  return (
    <>
      <Navigation selectedOption={selectedOption} handleYearChange={handleYearChange} />

      <div className="bg-gradient-to-r from-sky-800 to-violet-800">
        <div className="max-w-5xl mx-auto">

          <div className="flex flex-col lg:flex-row flex-wrap gap-3 place-content-center">
            {listBooks}
          </div>

        </div>
      </div>
    </>
  );
}