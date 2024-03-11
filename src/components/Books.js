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
import genreArray from "../utils/genreArray";

export default function Books() {

  // Original books and display books state from context
  const { state } = useBooks();
  const { bookArray, displayedBooks } = state;
  // Dispatch function from context
  const { dispatch } = useBooksActions();

  // FILTER
  const [filterQuery, setFilterQuery] = useState('');

  const handleFilter = (e) => {
    // If there is a previous filter, reset to prevent double filtering. A more complex state would be needed to re-filter old search results
    if(filterQuery) {
      resetSearch();
    }
    const newFilterQuery = e.target.value;
    setFilterQuery(newFilterQuery);

    dispatch({ type: 'FILTER_GENRE', payload: newFilterQuery });
  }

  // SEARCH
  const [query, setQuery] = useState('');
  // Set up Fuse
  const searchOptions = {
    includeScore: true,
    threshold: 0.2, // Lower means more strict match
    keys: ["title", "author"],
  };
  // If a genre filter is on, search from the filtered books, else, search from all books
  const fuse = filterQuery ? new Fuse(displayedBooks, searchOptions) : new Fuse(bookArray, searchOptions);

  // Input field event handler
  const handleChangeInput = (e) => {
    const newInput = e.target.value;
    setQuery(newInput);
  }
  // Search dispatch action
  const handleSearchClick = () => {
    dispatch({ type: 'SEARCH', payload: { query, fuse } });
  };

  // Trigger search by enter
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearchClick();
    }
  };
 
  // SORTING
  const [sortOption, setSortOption] = useState('');
  // Sort dispatch action
  const handleSort = (e) => {
    const newSortOption = e.target.value;
    setSortOption(newSortOption);
    dispatch({ type: 'SORT', payload: { newSortOption } });
  };
  const sortArray = ["Title A-Z", "Title Z-A", "Author A-Z", "Author Z-A", "Rating 5-1", "Rating 1-5", "Year newest", "Year oldest"];

  // RESET FILTERS
  const resetSearch = () => {
    dispatch({ type: 'RESET_FILTERS' });
    setQuery('');
    setSortOption('');
    setFilterQuery('');
  };
  
  // PAGINATION
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage, setBooksPerPage] = useState({maxBooks: 10, trueBooks: 10});
  
  const handleBooksPerPage = (e) => {
    const maxBooksPerPage = e.target.value;
    const trueBooksPerPage = Math.min(maxBooksPerPage, displayedBooks.length);
    setBooksPerPage({maxBooks: maxBooksPerPage, trueBooks: trueBooksPerPage });
  }

  const totalPages = Math.ceil(displayedBooks.length / booksPerPage.maxBooks);
  const lastItemIndex = currentPage * booksPerPage.maxBooks;
  const firstItemIndex = lastItemIndex - booksPerPage.maxBooks;

  const paginatedBooks = displayedBooks.slice(firstItemIndex, lastItemIndex);

  // Pagination controls
  const goAnywhere = (number) => setCurrentPage(number);
  const goBack = () => setCurrentPage((prevCurrentPage) => Math.max(prevCurrentPage - 1, 1))
  const goForward = () => setCurrentPage((prevCurrentPage) => Math.min(prevCurrentPage + 1, totalPages));

  const paginationButtonNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  // MAP refined and paginated books for DISPLAY
  const listBooks = paginatedBooks
      .map((book, index) => (
      <Book key={index} book={book} />
  ));
console.log(listBooks)
  return (
    <Background>
      <Navigation />
      <BasicFlexbox>
        <div className="flex flex-col lg:flex-row items-center gap-2 mx-auto justify-center">
          <InputElement
            placeholder="Search for books or authors"
            value={query}
            onChange={handleChangeInput}
            handleKeyDown={handleKeyDown}
          />
          <Button buttonOnClick={handleSearchClick}>Search</Button>
        </div>

        <DropDownElement text="Filter" name="filter" options={genreArray} selectedOption={filterQuery} eventHandler={handleFilter} />

        <DropDownElement text="Sort" name="sort" options={sortArray} selectedOption={sortOption} eventHandler={handleSort} />

        <Button buttonOnClick={resetSearch}>Reset</Button>
      </BasicFlexbox>

      {listBooks.length > 0 ?
      <BasicFlexbox>
        {listBooks}
      </BasicFlexbox> : 
      <SmallInfoContainer>No books found for this search or filter.</SmallInfoContainer>
      }

      <div className="flex flex-row flex-wrap">
        <DropDownElement text="Display" name="display" options={[10, 20, 50]} selectedOption={booksPerPage.maxBooks} eventHandler={handleBooksPerPage} />

        <Button buttonType="button" buttonOnClick={goBack}>Previous</Button>
        {paginationButtonNumbers.map((paginationNumber, index) => {
          return <Button key={index} buttonType="button" buttonOnClick={() => goAnywhere(paginationNumber)}>{paginationNumber}</Button>
        })}
        <Button buttonType="button" buttonOnClick={goForward}>Next</Button>
      </div>
    </Background>
  );
}