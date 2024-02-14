export default function BookText({ series, title, author }) {

    const bookSeries = series ? <span>{series}</span> : "";

    return (
      <div className="bookText">
        <span>{title}</span>
        {bookSeries}
        <span> by {author}</span>
      </div>
    );
}