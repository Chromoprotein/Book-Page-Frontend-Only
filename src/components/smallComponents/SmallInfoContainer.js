import { WhiteTextLine } from "./TextLines";

export default function SmallInfoContainer({ children }) {
    return (
      <div className="text-center bg-slate-800 w-1/2 mx-auto rounded-lg p-3 my-3">
        <WhiteTextLine>{ children }</WhiteTextLine>
      </div>
    );
} 