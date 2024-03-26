import IconContainer from "./IconContainer";

export default function Button({ children, buttonType, buttonOnClick, isDisabled, isActive, testId }) {

    return (
        <button type={buttonType} onClick={buttonOnClick} disabled={isDisabled} className={`rounded-full w-36 block mx-auto my-1 py-3 text-purple-600 font-semibold hover:text-white hover:bg-purple-800 hover:opacity-80 focus:bg-purple-800 focus:text-white disabled:bg-slate-700 disabled:text-slate-900  disabled:hover:opacity-100 ${isActive ? "bg-purple-800" : "bg-slate-900"}`} data-testid={testId}>
            <IconContainer>
                {children}
            </IconContainer>
        </button>
    );
}