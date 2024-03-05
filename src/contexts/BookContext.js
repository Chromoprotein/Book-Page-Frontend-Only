import { useContext, createContext, useReducer } from "react";
import booksData from "../utils/booksData";
// Sort helper function
import { sortBooks } from "../utils/SortBooks";

const BookContext = createContext();
const BookDispatchContext = createContext();

// Search helper function
const filterBooks = (fuse, query) => {
  return fuse.search(query).map(result => result.item);
};

const bookReducer = (state, action) => {
  const { type, payload } = action;
  // Destructure state
  const { bookArray, displayedBooks } = state;

  switch (type) {

    case "ADD_BOOK":
      return {
        ...state,
        bookArray: [...bookArray, payload], // Update the full books list
        displayedBooks: [...bookArray, payload], // Also update displayed books list
      };

    case 'SEARCH':
      const searchResults = payload.query ? filterBooks(payload.fuse, payload.query) : state.bookArray;
      return { ...state, displayedBooks: searchResults };

    case 'SORT':
      const sortedBooks = sortBooks([...displayedBooks], payload.newSortOption);
      return { ...state, displayedBooks: sortedBooks };

    case 'RESET_FILTERS':
      return { ...state, displayedBooks: bookArray };

    default:
      throw new Error(`Unhandled action type: ${type}`);

  }
};


export default function BookContextProvider({ children }) {

  // Using useReducer instead of multiple useState hooks
  const [state, dispatch] = useReducer(bookReducer, initialState);

  return (
    <div>
      <BookContext.Provider value={{ state }}>
        <BookDispatchContext.Provider value={{ dispatch }}>
          {children}
        </BookDispatchContext.Provider>
      </BookContext.Provider>
    </div>
  );
}

// Custom hook to use the context
export function useBooks() {
  return useContext(BookContext);
}

export function useBooksActions () {
  return useContext(BookDispatchContext);
}

const initialState = {
  bookArray: booksData,
  displayedBooks: booksData,
};