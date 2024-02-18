import { Link } from "react-router-dom";
import Button from "./smallComponents/Button";
import { yearsArray } from "../utils/yearsArray";
import { Title } from "./smallComponents/Title";
import DropDownElement from "./smallComponents/DropDownElement";

export default function Navigation({ selectedOption, handleYearChange }) {

    return (
        <div className="bg-opacity-50 bg-gradient-to-r border-b border-sky-700 from-sky-800 bg-violet-800 sticky top-0 z-40 grid md:grid-cols-3 md:height-10 place-items-center">
            <Title>Booksmosis</Title>

            <Link to={`/upload`}><Button buttonType="button">Add Book</Button></Link>

            <DropDownElement text="Select year" options={yearsArray} selectedOption={selectedOption} eventHandler={handleYearChange} />
        </div>
    );
}