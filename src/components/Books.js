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

  // Display books
  const [results, setResults] = useState(bookArray);

  // Search logic
  const [query, setQuery] = useState('');
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

  // Sorting states
  const [sortOption, setSortOption] = useState(''); // Default sort option
  // Sorting event handler
  const handleSort = (e) => {
    setSortOption(e.target.value);
    const sortedBooks = sortBooks([...results], e.target.value);
    setResults(sortedBooks);
  }

  // Reset everything
  const resetSearch = () => {
    setQuery('');
    setSortOption('')
    setResults(bookArray);
  }
  
  // Map the refined books for display
  const listBooks = results
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

      <select value={sortOption} onChange={handleSort}>
        <option value="" disabled>Sort</option>
        <option value="title-asc">Title A to Z</option>
        <option value="title-desc">Title Z to A</option>
        <option value="author-asc">Author A to Z</option>
        <option value="author-desc">Author Z to A</option>
        <option value="rating-desc">Rating Best to Worst</option>
        <option value="rating-asc">Rating Worst to Best</option>
      </select>

      <button disabled={!query && !sortOption} onClick={resetSearch}>Reset</button>

      {listBooks.length > 0 ?
      <BasicFlexbox>
        {listBooks}
      </BasicFlexbox> : 
      <SmallInfoContainer>No books found for this search or filter.</SmallInfoContainer>
      }
    </Background>
  );
}