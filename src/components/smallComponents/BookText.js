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

export function TextLine({children}) {
  return (
    <p className="text-slate-400">{children}</p>
  );
}

export function BigTextLine({children}) {
  return (
    <p className="text-white text-xl font-medium">{children}</p>
  );
}