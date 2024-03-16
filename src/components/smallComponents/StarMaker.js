import { FaStar } from "react-icons/fa";
import IconContainer from "./IconContainer";

export default function StarMaker({stars}) {
    const fullStars = Math.floor(stars);

    const fullStarsElements = Array.from({ length: fullStars }, (_, index) => (
        <FaStar key={index} size="28px" />
    ));

    return (
        <figure className="p-3 text-purple-800">
            <IconContainer>
                {fullStarsElements}
            </IconContainer>
        </figure>
    );
};