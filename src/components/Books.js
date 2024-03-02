import React, { useState, useReducer } from "react";
import "../styles/output.css";
import Book from "./Book";
import { useBooks } from "../contexts/BookContext";
import Navigation from "./Navigation";
import Background from "./smallComponents/Background";
import BasicFlexbox from "./smallComponents/BasicFlexbox";
import SmallInfoContainer from "./smallComponents/SmallInfoContainer";
import Fuse from 'fuse.js';
import bookOrganizerReducer from "../utils/BookOrganizerReducer";
import DropDownElement from "./smallComponents/DropDownElement";
import Button from "./smallComponents/Button";
import { InputElement } from "./smallComponents/InputElement";

export default function Books() {

  // Original books context
  const { state: contextState } = useBooks();
  const { bookArray } = contextState;

  // Initialize the reducer
  const initialState = {
    results: bookArray,
  };
  const [state, dispatch] = useReducer(bookOrganizerReducer, initialState);
  // State of books to display
  const { results } = state;

  // Search 
  const [query, setQuery] = useState('');
  const searchOptions = {
    includeScore: true,
    threshold: 0.2, // Lower means more strict match
    keys: ["title", "author"],
  };
  const fuse = new Fuse(bookArray, searchOptions);
  const handleSearchClick = () => {
    dispatch({ type: 'search', payload: { query, fuse } });
  };

  // Sorting 
  const [sortOption, setSortOption] = useState('');
  const handleSort = (e) => {
    const newSortOption = e.target.value;
    setSortOption(newSortOption);
    dispatch({ type: 'sort', payload: { newSortOption } });
  };

  // Reset everything
  const resetSearch = () => {
    dispatch({ type: 'reset', payload: { bookArray } });
    setQuery('');
    setSortOption('');
  };
  
  // Map the refined books for display
  const listBooks = results
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
            onChange={(e) => setQuery(e.target.value)}
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