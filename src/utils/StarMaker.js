import { FaStar } from "react-icons/fa";
import IconContainer from "../components/smallComponents/IconContainer";

export default function StarMaker({stars}) {
    const fullStars = Math.floor(stars);

    const fullStarsElements = Array.from({ length: fullStars }, (_, index) => (
        <FaStar key={index} size="28px" />
    ));

    return (
        <div className="p-3 text-purple-800">
            <IconContainer>
                {fullStarsElements}
            </IconContainer>
        </div>
    );
};