import React, { useState } from "react";
import "../styles/books.css";
import Button from "./smallComponents/Button";
import { useBooksActions } from "../contexts/BookContext";
import { InputElement, TextAreaElement } from "./smallComponents/InputElement";
import DropDownElement from "./smallComponents/DropDownElement";
import { yearsArray } from "../utils/yearsArray";
import Background from "./smallComponents/Background";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useBooks } from "../contexts/BookContext";

export default function BookForm() {

  const { state } = useBooks();
  const { bookArray } = state;

  // For edit pages
  const { id } = useParams();

  const emptyForm = id 
  ? bookArray.find((book) => book.title === id) 
  : {
    title: "",
    author: "",
    imgSrc: "",
    year: "",
    review: "",
  };

  const [formState, setFormState] = useState(emptyForm);
  const { dispatch } = useBooksActions();

  // To return after submitting the form
  const navigate = useNavigate();

  // For the submit button
  const isEmpty = Object.values(formState).some(field => field === null || field === '');

  const handleFormChange = (e) => {
    if (e.target.type === 'file') {
      if (formState.imgSrc) {
        URL.revokeObjectURL(formState.imgSrc);
      }
      const uploadedImage = URL.createObjectURL(e.target.files[0]);
      setFormState(prevState => ({
        ...prevState,
        [e.target.name]: uploadedImage,
      }));
    } else {
      setFormState(prevState => ({
        ...prevState,
        [e.target.name]: e.target.value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(id) {
      // Dispatch an action to edit a book
      dispatch({ type: "EDIT_BOOK", payload: formState });
      navigate(`/book/${encodeURIComponent(id)}`);
    } else {
      // Dispatch an action to add a new book
      dispatch({ type: "ADD_BOOK", payload: formState });
      setFormState(emptyForm);
      navigate("/");
    }
  };

  const handleDelete = () => {
    dispatch({ type: "DELETE_BOOK", payload: formState })
    navigate("/");
  }

  return (
    <Background>
        <form className="bg-slate-800 rounded-lg p-3 w-96 flex flex-col justify-center items-center mx-auto" onSubmit={handleSubmit}>

            <div>
              <input 
                type="file" 
                name="imgSrc"
                id="file-upload" 
                className="hidden" 
                onChange={handleFormChange} 
              />
              <Button
                buttonType="button"
                buttonOnClick={() => document.getElementById('file-upload').click()}
              >Upload Image
              </Button>
              {formState.imgSrc && <img src={formState.imgSrc} alt="Uploaded" />}
            </div>

            <InputElement labelText="Book name" name="title" value={formState.title} onChange={handleFormChange} />

            <InputElement labelText="Author name" name="author" value={formState.author} onChange={handleFormChange} />

            <DropDownElement text="Read year" name="year" options={yearsArray} selectedOption={formState.year} eventHandler={handleFormChange} />

            <TextAreaElement labelText="Write a short review" name="review" value={formState.review} onChange={handleFormChange} />

            <Button buttonType="submit" isDisabled={isEmpty}>
              Submit
            </Button>

            <Link to={`/`}>
              <Button buttonType="button">Return</Button>
            </Link>

            {id && <Button buttonType="button" buttonOnClick={handleDelete}>Delete</Button>}
          </form>
    </Background>
  );
}
