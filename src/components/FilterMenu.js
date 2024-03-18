import InputElement from "./smallComponents/InputElement";
import DropDownElement from "./smallComponents/DropDownElement";
import Button from "./smallComponents/Button";
import genreArray from "../utils/genreArray";
import { sortArray } from "../utils/sortArray";

export default function FilterMenu({ query, handleChangeInput, filterQuery, handleChangeMenu, sortOption, handleSort, resetSearch }) {

    return (
      <fieldset className="flex flex-row flex-wrap justify-center place-content-center mx-auto gap-3 p-2 lg:w-2/3">
        <div>
          <InputElement
            placeholder="Type to search"
            value={query}
            onChange={handleChangeInput}
          />
        </div>

        <DropDownElement text="Filter" name="filter" options={genreArray} selectedOption={filterQuery} eventHandler={handleChangeMenu} />

        <DropDownElement text="Sort" name="sort" options={sortArray} selectedOption={sortOption} eventHandler={handleSort} />

        <Button buttonOnClick={resetSearch} isDisabled={(query.length !== 0 || filterQuery.length !== 0 || sortOption !== 'Title A-Z') ? false : true}>Reset</Button>
      </fieldset>
    );
}