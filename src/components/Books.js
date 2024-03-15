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
 
export default function Books() {

  // Filter and search
  const { query, filterQuery, handleChangeInput, handleChangeMenu, resetSearch } = useSearchAndFilter();

  // Sorting
  const { sortOption, handleSort } = useSort();

  // Pagination
  const { booksPerPage, handleBooksPerPage, paginatedBooks, goAnywhere, goBack, goForward, paginationButtonNumbers } = usePagination();

  // MAP refined and paginated books for DISPLAY
  const listBooks = paginatedBooks
      .map((book, index) => (
      <IndividualBook key={index} book={book} />
  ));

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

      <PaginationButtons booksPerPage={booksPerPage} handleBooksPerPage={handleBooksPerPage} goBack={goBack} paginationButtonNumbers={paginationButtonNumbers} goAnywhere={goAnywhere} goForward={goForward} />

    </Background>
  );
}