import React from "react";
import "../styles/output.css";
import IndividualBook from "./IndividualBook";
import Navigation from "./Navigation";
import Background from "./smallComponents/Background";
import BasicFlexbox from "./smallComponents/BasicFlexbox";
import SmallInfoContainer from "./smallComponents/SmallInfoContainer";
import useSearchAndFilter from "../utils/useSearchAndFilter";
import useSort from "../utils/useSort";
import usePagination from "../utils/usePagination";
import PaginationButtons from "./PaginationButtons";
import FilterMenu from "./FilterMenu";
import { useBooksActions } from "../contexts/BookContext";
import { useEffect } from "react";
 
export default function Books() {

  const { dispatch } = useBooksActions();

  // Filter and search
  const { query, filterQuery, handleChangeInput, handleChangeMenu, setQuery, setFilterQuery } = useSearchAndFilter();

  // Sorting
  const { sortOption, handleSort, setSortOption, handleSortRun } = useSort();

  // Pagination
  const { currentPage, booksPerPage, handleBooksPerPage, paginatedBooks, goAnywhere, goBack, goForward, paginationButtonNumbers, totalPagesState } = usePagination();
 
  // MAP refined and paginated books for DISPLAY
  const listBooks = paginatedBooks
      .map((book, index) => (
      <IndividualBook key={index} book={book} />
  ));

  // Reset the search, filters, or sorting
  const resetSearch = () => {
    setQuery('');
    setFilterQuery('');
    setSortOption('Title A-Z');
    dispatch({ type: 'RESET_FILTERS' });
  };

  // Changing the search query or the filter query re-runs sorting
  // This has to be here and not in the useSort hook, so the states of query and filterQuery follow correctly
  useEffect(() => {
    handleSortRun();
  }, [handleSortRun, query, filterQuery]);

  
  return (
    <Background>
      <Navigation />

      <FilterMenu query={query} handleChangeInput={handleChangeInput} filterQuery={filterQuery} handleChangeMenu={handleChangeMenu} sortOption={sortOption} handleSort={handleSort} resetSearch={resetSearch} />

      {listBooks.length > 0 ?
        <BasicFlexbox>
          {listBooks}
        </BasicFlexbox> : 
        <SmallInfoContainer>No books found for this search or filter.</SmallInfoContainer>
      }

      <PaginationButtons currentPage={currentPage} booksPerPage={booksPerPage} handleBooksPerPage={handleBooksPerPage} goBack={goBack} paginationButtonNumbers={paginationButtonNumbers} goAnywhere={goAnywhere} goForward={goForward} totalPages={totalPagesState} />

    </Background>
  );
}