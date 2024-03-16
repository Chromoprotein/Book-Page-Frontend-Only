import BasicFlexbox from "./smallComponents/BasicFlexbox";
import InputElement from "./smallComponents/InputElement";
import DropDownElement from "./smallComponents/DropDownElement";
import Button from "./smallComponents/Button";
import genreArray from "../utils/genreArray";
import { sortArray } from "../utils/sortArray";

export default function FilterMenu({ query, handleChangeInput, filterQuery, handleChangeMenu, sortOption, handleSort, resetSearch }) {

    return (
      <fieldset>
        <BasicFlexbox>
          <div className="flex flex-col lg:flex-row items-center gap-2 mx-auto justify-center">
            <InputElement
              placeholder="Type to search"
              value={query}
              onChange={handleChangeInput}
            />
          </div>

          <DropDownElement text="Filter" name="filter" options={genreArray} selectedOption={filterQuery} eventHandler={handleChangeMenu} />

          <DropDownElement text="Sort" name="sort" options={sortArray} selectedOption={sortOption} eventHandler={handleSort} />

          <Button buttonOnClick={resetSearch}>Reset</Button>
        </BasicFlexbox>
      </fieldset>
    );
}