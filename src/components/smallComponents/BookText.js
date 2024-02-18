import { TextLine } from "./TextLines";
import { BigTextLine } from "./TextLines";

export default function BookText({ series, title, author }) {

    const bookSeries = series ? <TextLine>{series}</TextLine> : "";

    return (
      <div className="px-6 pt-6 text-center">
        <BigTextLine>{title}</BigTextLine>
        {bookSeries}
        <TextLine> by {author}</TextLine>
      </div>
    );
}

