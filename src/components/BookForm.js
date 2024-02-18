import React from "react";
import "../styles/books.css";
import Button from "./smallComponents/Button";
import { useBooks, useBooksActions } from "../contexts/BookContext";
import { InputElement, TextAreaElement } from "./smallComponents/InputElement";
import DropDownElement from "./smallComponents/DropDownElement";
import { yearsArray } from "../utils/yearsArray";

export default function BookForm() {

  const { state } = useBooks();
  const { newEntry } = state;
  const { handleFormChange, handleSubmit } = useBooksActions();

  console.log(newEntry)
  return (
   <form className="formStyle" onSubmit={handleSubmit}>

      <div>
        <input 
          type="file" 
          name="imgSrc"
          id="file-upload" 
          style={{ display: 'none' }} 
          onChange={handleFormChange} 
        />
        <label htmlFor="file-upload">
          Upload Image
        </label> 
        {newEntry.imgSrc && <img src={newEntry.imgSrc} alt="Uploaded" />}
      </div>

      <InputElement text="Book name" name="title" value={newEntry.title} onChange={handleFormChange} />

      <InputElement text="Author name" name="author" value={newEntry.author} onChange={handleFormChange} />

      <DropDownElement text="When did you read this?" name="year" options={yearsArray} selectedOption={newEntry.year} eventHandler={handleFormChange} />

      <TextAreaElement text="Write a short review" name="review" value={newEntry.review} onChange={handleFormChange} />

      <Button buttonType="submit">
        Submit
      </Button>
    </form>
  );
}
