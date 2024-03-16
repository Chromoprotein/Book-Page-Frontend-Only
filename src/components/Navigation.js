import { Title } from "./smallComponents/Title";
import { MdLibraryAdd } from "react-icons/md";
import LinkButton from "./smallComponents/LinkButton";

export default function Navigation() {

    return (
        <nav className="bg-opacity-50 bg-gradient-to-r border-b border-sky-700 from-sky-800 bg-violet-800 sticky top-0 z-40 flex md:height-10 place-items-center justify-center gap-4 w-full">
            <Title/>
            <LinkButton url={`/upload`}>
                <MdLibraryAdd/> Upload
            </LinkButton>
        </nav>
    );
}