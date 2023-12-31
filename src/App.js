import { Routes, Route } from "react-router-dom";
import Books from "./Books";
import BookDetails from "./BookDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/book/:id" element={<BookDetails/>} />
      </Routes>
    </div>
  );
}

export default App;
