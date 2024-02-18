import { FaRegStar } from "react-icons/fa";
import { FaRegStarHalf } from "react-icons/fa";
import IconContainer from "../components/smallComponents/IconContainer";

export default function StarMaker({stars}) {
    const fullStars = Math.floor(stars);
    const hasHalfStar = stars % 1 >= 0.5;

    const fullStarsElements = Array.from({ length: fullStars }, (_, index) => (
        <FaRegStar key={index} />
    ));

    return (
        <div className="p-3 text-purple-800">
            <IconContainer>
                {fullStarsElements}
                {hasHalfStar && <FaRegStarHalf />}
            </IconContainer>
        </div>
    );
};