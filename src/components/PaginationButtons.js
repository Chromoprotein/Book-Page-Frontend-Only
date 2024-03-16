import DropDownElement from "./smallComponents/DropDownElement";
import Button from "./smallComponents/Button";

export default function PaginationButtons({ booksPerPage, handleBooksPerPage, goBack, paginationButtonNumbers, goAnywhere, goForward }) {
    return (
      <nav className="flex flex-row flex-wrap">
        <DropDownElement text="Display" name="display" options={[10, 20, 50]} selectedOption={booksPerPage.maxBooks} eventHandler={handleBooksPerPage} />

        <Button buttonType="button" buttonOnClick={goBack}>Previous</Button>
        {paginationButtonNumbers.map((paginationNumber, index) => {
          return <Button key={index} buttonType="button" buttonOnClick={() => goAnywhere(paginationNumber)}>{paginationNumber}</Button>
        })}
        <Button buttonType="button" buttonOnClick={goForward}>Next</Button>
      </nav>
    );
}