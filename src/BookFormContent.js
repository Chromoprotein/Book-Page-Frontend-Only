import { useBooks, useBooksActions } from "./BookContext";

export default function BookFormContent() {
  // Destructure newEntry, handleSubmit, and handleFormChange from the context state objects
  const { state } = useBooks();
  const { newEntry } = state;

  const { handleFormChange, handleSubmit } = useBooksActions();

  return (
    <form className="formStyle" onSubmit={handleSubmit}>
      <label className="labelStyle">
        Book name:{" "}
        <input
          className="inputStyle"
          name="title"
          value={newEntry.title}
          onChange={handleFormChange}
          required
        />
      </label>
      <label className="labelStyle">
        Author name:{" "}
        <input
          className="inputStyle"
          name="author"
          value={newEntry.author}
          onChange={handleFormChange}
          required
        />
      </label>
      <label className="labelStyle">
        Link to cover image:{" "}
        <input
          className="inputStyle"
          name="imgSrc"
          value={newEntry.imgSrc}
          onChange={handleFormChange}
        />
      </label>
      <label className="labelStyle">
        What year did you read this?{" "}
        <input
          className="inputStyle"
          name="year"
          value={newEntry.year}
          type="number"
          onChange={handleFormChange}
          required
        />
      </label>
      <label className="labelStyle">
        Write a short review:{" "}
        <textarea
          className="inputStyle"
          name="review"
          value={newEntry.review}
          onChange={handleFormChange}
        />
      </label>
      <button className="formButton" type="submit" value="Submit">
        Submit
      </button>
    </form>
  );
}