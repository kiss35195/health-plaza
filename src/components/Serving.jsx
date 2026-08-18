const buttonClass =
  "inline-block rounded-full bg-lime-200 px-4 py-3 font-semibold tracking-wide text-lime-700 transition-colors hover:bg-lime-300";

function Serving({ unit }) {
  return (
    <div className="py-2">
      <button className={buttonClass}>－</button>
      <span className="mx-2">1{unit}</span>
      <button className={buttonClass}>＋</button>
    </div>
  );
}

export default Serving;
