import DropDownElement from "./smallComponents/DropDownElement";
import Button from "./smallComponents/Button";

export default function PaginationButtons({ currentPage, booksPerPage, handleBooksPerPage, goBack, paginationButtonNumbers, goAnywhere, goForward, totalPages }) {
  
    return (
      <nav className="flex flex-row flex-wrap flex-none justify-center place-content-center mx-auto gap-3 p-2 lg:w-2/3">
        <DropDownElement text="Display" name="display" options={[10, 20, 50]} selectedOption={booksPerPage.maxBooks} eventHandler={handleBooksPerPage} />

        <Button buttonType="button" buttonOnClick={goBack} isDisabled={currentPage === 1}>Previous</Button>

        {paginationButtonNumbers.map((paginationNumber, index) => {
          return <Button 
            key={index} 
            buttonType="button" 
            buttonOnClick={() => goAnywhere(paginationNumber)} 
            isActive={currentPage === paginationNumber && true}>
              {paginationNumber}
            </Button>
        })}

        <Button buttonType="button" buttonOnClick={goForward} isDisabled={currentPage === totalPages}>Next</Button>
      </nav>
    );
}