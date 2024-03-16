import WhiteTextLine from "./WhiteTextLine";

export default function SmallInfoContainer({ children }) {
    return (
      <dialog className="text-center bg-slate-800 w-1/2 mx-auto rounded-lg p-3 my-3">
        <WhiteTextLine>{ children }</WhiteTextLine>
      </dialog>
    );
} 