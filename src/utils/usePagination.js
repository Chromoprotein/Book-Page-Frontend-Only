import { useState, useEffect } from "react";
import { useBooks } from '../contexts/BookContext';

export default function usePagination() {
  const { state } = useBooks();
  const { displayedBooks } = state;

  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage, setBooksPerPage] = useState({maxBooks: 10, trueBooks: 10});

  const handleBooksPerPage = (e) => {
    const maxBooksPerPage = e.target.value;
    const trueBooksPerPage = Math.min(maxBooksPerPage, displayedBooks.length);
    setBooksPerPage({maxBooks: maxBooksPerPage, trueBooks: trueBooksPerPage });
  }

  const totalPages = Math.ceil(displayedBooks.length / booksPerPage.maxBooks);
  const [totalPagesState, setTotalPagesState] = useState(totalPages);
  const lastItemIndex = currentPage * booksPerPage.maxBooks;
  const firstItemIndex = lastItemIndex - booksPerPage.maxBooks;

  const paginatedBooks = displayedBooks.slice(firstItemIndex, lastItemIndex);

  useEffect(() => {
    // Reset to the first page whenever `displayedBooks` changes
    setCurrentPage(1);
    // Recalculate the total pages
    const newTotalPages = Math.ceil(displayedBooks.length / booksPerPage.maxBooks);
    setTotalPagesState(newTotalPages);
  }, [displayedBooks, booksPerPage.maxBooks]);

  // Pagination controls
  const goAnywhere = (number) => setCurrentPage(number);
  const goBack = () => setCurrentPage((prevCurrentPage) => Math.max(prevCurrentPage - 1, 1))
  const goForward = () => setCurrentPage((prevCurrentPage) => Math.min(prevCurrentPage + 1, totalPagesState));

  const paginationButtonNumbers = Array.from({ length: totalPagesState }, (_, index) => index + 1);
  
  return {
    booksPerPage,
    handleBooksPerPage,
    paginatedBooks,
    goAnywhere,
    goBack,
    goForward,
    paginationButtonNumbers,
    currentPage,
    setCurrentPage,
    totalPagesState
  }
}