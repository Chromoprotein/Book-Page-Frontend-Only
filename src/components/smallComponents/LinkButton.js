import { Link } from "react-router-dom";
import Button from "./Button";

export default function LinkButton({ url, children }) {
    return (
        <Link to={url}>
            <Button buttonType="button">
                { children }
            </Button>
        </Link>
    );
}