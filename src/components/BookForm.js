import React from "react";
import "../styles/books.css";
import Button from "./smallComponents/Button";
import { useBooks, useBooksActions } from "../contexts/BookContext";
import { InputElement, TextAreaElement } from "./smallComponents/InputElement";
import DropDownElement from "./smallComponents/DropDownElement";
import { yearsArray } from "../utils/yearsArray";
import Background from "./smallComponents/Background";

export default function BookForm() {

  const { state } = useBooks();
  const { newEntry } = state;
  const { handleFormChange, handleSubmit } = useBooksActions();

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
              {newEntry.imgSrc && <img src={newEntry.imgSrc} alt="Uploaded" />}
            </div>

            <InputElement labelText="Book name" name="title" value={newEntry.title} onChange={handleFormChange} />

            <InputElement labelText="Author name" name="author" value={newEntry.author} onChange={handleFormChange} />

            <DropDownElement text="Read year" name="year" options={yearsArray} selectedOption={newEntry.year} eventHandler={handleFormChange} />

            <TextAreaElement labelText="Write a short review" name="review" value={newEntry.review} onChange={handleFormChange} />

            <Button buttonType="submit">
              Submit
            </Button>
          </form>
    </Background>
  );
}
