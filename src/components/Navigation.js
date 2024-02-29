import { Link } from "react-router-dom";
import Button from "./smallComponents/Button";
import { Title } from "./smallComponents/Title";
import { MdLibraryAdd } from "react-icons/md";

export default function Navigation() {

    return (
        <div className="bg-opacity-50 bg-gradient-to-r border-b border-sky-700 from-sky-800 bg-violet-800 sticky top-0 z-40 flex md:height-10 place-items-center justify-center gap-4 w-full">
            <Title/>
            <Link to={`/upload`}><Button buttonType="button"><MdLibraryAdd/> Upload</Button></Link>
        </div>
    );
}