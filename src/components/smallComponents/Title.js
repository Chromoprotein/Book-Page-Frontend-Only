import { Link } from "react-router-dom";
import logo from "../../logo.png";

export function Title() {
  return (
    <Link to={`/`} className="flex justify-around items-center px-2">
      <img src={logo} className="w-20 pl-2" alt="Booksmosis logo"/>
      <h1 className="hidden md:inline text-4xl opacity-100 font-medium tracking-wide font-sans text-slate-800">
        Booksmosis
      </h1>
    </Link>
  );
}