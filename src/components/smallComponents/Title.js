import { Link } from "react-router-dom";
import logo from "../../logo.png";

export function Title() {
  return (
    <Link to={`/`} className="flex justify-around items-center">
      <img src={logo} className="w-10 md:w-20 md:p-3" alt="Booksmosis logo"/>
      <h1 className="hidden md:inline text-4xl opacity-100 font-medium tracking-wide font-sans text-slate-800">
        Booksmosis
      </h1>
    </Link> 
  );
}