import { Link } from "react-router-dom";

export function Title({children}) {
  return (
    <Link to={`/`}>
      <h1 className="text-4xl opacity-100 font-medium tracking-wide font-sans hover:font-serif text-slate-800">{children}</h1>
    </Link>
  );
}