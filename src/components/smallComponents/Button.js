export default function Button({ children, buttonType, buttonOnClick }) {

    return (
        <button type={buttonType} onClick={buttonOnClick} className="bg-slate-900 w-32 block mx-auto my-2 px-6 py-3 text-purple-600 font-semibold hover:text-white focus:outline-none">
            {children}
        </button>
    );
}