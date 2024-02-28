export default function BookCover({img}) {
    return (
        <img src={img} alt="Book cover" className="md:rounded-l-lg rounded-tr-lg rounded-tl-lg md:rounded-tr-none w-full md:h-full opacity-80 object-cover" />
    );
}