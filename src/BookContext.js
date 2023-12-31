import { useContext, createContext, useReducer } from "react";
import booksData from "./booksData"; // Importing the array that contains books

const BookContext = createContext();
const BookDispatchContext = createContext();

// Reducer function to handle state updates
const bookReducer = (state, action) => {
  const { type, payload } = action;
  const { title, author, imgSrc, year, review } = state.newEntry;

  switch (type) {
    case "ADD_BOOK":
      return {
        ...state,
        bookArray: [...state.bookArray, payload],
      };
    case "RESET_FORM":
      return {
        ...state,
        newEntry: {
          title: "",
          author: "",
          imgSrc: "",
          year: "",
          review: "",
        },
      };
    case "UPDATE_FORM":
      return {
        ...state,
        newEntry: {
          title,
          author,
          imgSrc,
          year,
          review,
          ...payload,
        },
      };
    default:
      return state;
  }
};


export default function BookContextProvider({ children }) {

  const initialState = {
    bookArray: booksData,
    newEntry: {
      title: "",
      author: "",
      imgSrc: "",
      year: "",
      review: "",
    },
  };

  // Using useReducer instead of multiple useState hooks
  const [state, dispatch] = useReducer(bookReducer, initialState);

  const handleFormChange = (e) => {
    dispatch({
      type: "UPDATE_FORM",
      payload: { [e.target.name]: e.target.value },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, author, imgSrc, year, review } = state.newEntry;
    const newBook = { title, author, imgSrc, year, review };

    // Dispatch an action to add a new book
    dispatch({ type: "ADD_BOOK", payload: newBook });

    // Dispatch an action to reset the form
    dispatch({ type: "RESET_FORM" });
  };

  return (
    <div>
      <BookContext.Provider value={{ state }}>
        <BookDispatchContext.Provider value={{ dispatch, handleSubmit, handleFormChange }}>
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
