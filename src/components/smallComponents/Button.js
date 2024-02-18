import IconContainer from "./IconContainer";

export default function Button({ children, buttonType, buttonOnClick }) {

    return (
        <button type={buttonType} onClick={buttonOnClick} className="bg-slate-900 rounded-full w-32 block mx-auto my-2 px-6 py-3 text-purple-600 font-semibold hover:text-white hover:bg-purple-800 hover:opacity-80 focus:outline-none focus:bg-purple-800 focus:text-white">
            <IconContainer>
                {children}
            </IconContainer>
        </button>
    );
}