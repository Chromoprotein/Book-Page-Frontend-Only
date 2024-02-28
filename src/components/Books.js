import React, { useState } from "react";
import "../styles/output.css";
import Book from "./Book";
import { useBooks } from "../contexts/BookContext";
import Navigation from "./Navigation";
import Background from "./smallComponents/Background";
import BasicFlexbox from "./smallComponents/BasicFlexbox";
import SmallInfoContainer from "./smallComponents/SmallInfoContainer";

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
    <Background>
      <Navigation selectedOption={selectedOption} handleYearChange={handleYearChange} />

      {listBooks.length > 0 ?
      <BasicFlexbox>
        {listBooks}
      </BasicFlexbox> : 
      <SmallInfoContainer>No books found for this search or filter.</SmallInfoContainer>
      }
    </Background>
  );
}