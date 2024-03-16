import TextLine from "./smallComponents/TextLine";
import BigTextLine from "./smallComponents/TextLine";

export default function BookText({ series, title, author, year, genre }) {

    const bookSeries = series ? <TextLine>{series}</TextLine> : "";

    return (
      <section className="px-6 pt-6 text-center">
        <BigTextLine>{title}</BigTextLine>
        {bookSeries && <TextLine>{bookSeries}</TextLine>}
        <TextLine> by {author}</TextLine>
        <TextLine> Read in {year}</TextLine>
        {genre && <TextLine>{genre}</TextLine>}
      </section>
    );
}

