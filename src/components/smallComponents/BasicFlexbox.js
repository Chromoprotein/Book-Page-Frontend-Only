export default function BasicFlexbox({children}) {
    return (
        <div className="flex flex-col lg:flex-row flex-wrap flex-none justify-center place-content-center gap-3 p-2 w-full">
            {children}
        </div>
    );
}