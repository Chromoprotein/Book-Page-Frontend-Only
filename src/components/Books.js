import React, { useState, useEffect } from "react";
import "../styles/output.css";
import Book from "./Book";
import { useBooks } from "../contexts/BookContext";
import Navigation from "./Navigation";
import Background from "./smallComponents/Background";
import BasicFlexbox from "./smallComponents/BasicFlexbox";
import SmallInfoContainer from "./smallComponents/SmallInfoContainer";
import { sortBooks } from "../utils/SortBooks";
import Fuse from 'fuse.js';

export default function Books() {
  // Destructure bookArray from the context state object
  const { state } = useBooks();
  const { bookArray } = state;

  // Search logic
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(bookArray);
  const searchOptions = {
    includeScore: true,
    threshold: 0.2, // Lower means more strict match
    keys: ["title", "author"],
  };
  const fuse = new Fuse(bookArray, searchOptions);
  const searchBooks = (query) => {
    return fuse.search(query).map(result => result.item);
  };
  const handleSearchClick = () => {
    if (query) {
      const searchResults = searchBooks(query);
      setResults(searchResults);
    } else {
      setResults([]);
    }
  };
  const resetSearch = () => {
    setQuery('');
    setResults(bookArray);
  }

  // Sorting states
  const [sortCriteria, setSortCriteria] = useState('title');
  const [isReversed, setIsReversed] = useState(false); // State to track if the list is reversed
  // Sorting event handlers
  const handleSortChange = (e) => setSortCriteria(e.target.value);
  const handleReverseToggle = () => setIsReversed(!isReversed);
  // Sort and optionally reverse books based on the current criteria
  const refinedBooks = sortBooks([...results], sortCriteria, isReversed);

  const listBooks = refinedBooks
      .map((book, index) => (
      <Book key={index} book={book} />
  ));

  return (
    <Background>
      <Navigation />

      <div>
        <input
          type="text"
          placeholder="Search for books or authors"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearchClick}>Search</button>
      </div>

      <select onChange={handleSortChange} value={sortCriteria}>
        <option value="title">Title</option>
        <option value="author">Author</option>
        <option value="stars">Rating</option>
      </select>
      <button onClick={handleReverseToggle}>
        {isReversed ? 'Normal Order' : 'Reverse Order'}
      </button>

      <button onClick={resetSearch}>Reset</button>

      {listBooks.length > 0 ?
      <BasicFlexbox>
        {listBooks}
      </BasicFlexbox> : 
      <SmallInfoContainer>No books found for this search or filter.</SmallInfoContainer>
      }
    </Background>
  );
}