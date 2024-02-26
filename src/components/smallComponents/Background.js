export default function Background({ children }) {
    return (
        <div className="bg-gradient-to-r from-sky-800 to-violet-800 min-w-full md:p-2">
            {children}
        </div>
    );
}