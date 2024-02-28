export default function Background({ children }) {
    return (
        <div className="bg-gradient-to-r from-sky-800 to-violet-800 min-w-full min-h-screen p-1">
            {children}
        </div>
    );
}