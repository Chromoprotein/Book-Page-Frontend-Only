export function TextLine({children}) {
  return (
    <p className="text-slate-400">{children}</p>
  );
}

export function WhiteTextLine({children}) {
  return (
    <p className="text-white">{children}</p>
  );
}
 
export function BigTextLine({children}) {
  return (
    <h2 className="text-white text-xl font-medium">{children}</h2>
  );
}