import React, { useState } from "react";
import "../styles/output.css";
import Book from "./Book";
import { useBooks } from "../contexts/BookContext";
import { useBooksActions } from "../contexts/BookContext";
import Navigation from "./Navigation";
import Background from "./smallComponents/Background";
import BasicFlexbox from "./smallComponents/BasicFlexbox";
import SmallInfoContainer from "./smallComponents/SmallInfoContainer";
import Fuse from 'fuse.js';
import DropDownElement from "./smallComponents/DropDownElement";
import Button from "./smallComponents/Button";
import { InputElement } from "./smallComponents/InputElement";

export default function Books() {

  // Original books and display books state from context
  const { state } = useBooks();
  const { bookArray, displayedBooks } = state;
  // Dispatch function from context
  const { dispatch } = useBooksActions();

  // SEARCH
  const [query, setQuery] = useState('');
  // Set up Fuse
  const searchOptions = {
    includeScore: true,
    threshold: 0.2, // Lower means more strict match
    keys: ["title", "author"],
  };
  const fuse = new Fuse(bookArray, searchOptions);
  // Input field event handler
  const handleChangeInput = (e) => {
    const newInput = e.target.value;
    setQuery(newInput);
  }
  // Search dispatch action
  const handleSearchClick = () => {
    dispatch({ type: 'SEARCH', payload: { query, fuse } });
  };
 
  // SORTING
  const [sortOption, setSortOption] = useState('');
  // Sort dispatch action
  const handleSort = (e) => {
    const newSortOption = e.target.value;
    setSortOption(newSortOption);
    dispatch({ type: 'SORT', payload: { newSortOption } });
  };

  // RESET FILTERS
  const resetSearch = () => {
    dispatch({ type: 'RESET_FILTERS' });
    setQuery('');
    setSortOption('');
  };
  
  // MAP REFINED BOOKS FOR DISPLAY
  const listBooks = displayedBooks
      .map((book, index) => (
      <Book key={index} book={book} />
  ));

  const sortArray = ["title-asc", "title-desc", "author-asc", "author-desc", "rating-desc", "rating-asc"];

  return (
    <Background>
      <Navigation />
      <BasicFlexbox>
        <div className="flex flex-col lg:flex-row items-center gap-2 mx-auto justify-center">
          <InputElement
            placeholder="Search for books or authors"
            value={query}
            onChange={handleChangeInput}
          />
          <Button buttonOnClick={handleSearchClick}>Search</Button>
        </div>

        <DropDownElement text="Sort" name="sort" options={sortArray} selectedOption={sortOption} eventHandler={handleSort} />

        <Button buttonOnClick={resetSearch}>Reset</Button>
      </BasicFlexbox>

      {listBooks.length > 0 ?
      <BasicFlexbox>
        {listBooks}
      </BasicFlexbox> : 
      <SmallInfoContainer>No books found for this search or filter.</SmallInfoContainer>
      }
    </Background>
  );
}