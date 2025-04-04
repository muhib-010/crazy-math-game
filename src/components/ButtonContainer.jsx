export default function ButtonContainer({ rightAns, scoreUpdater }) {
  return (
    <div className="w-full -z-10 flex justify-between fixed bottom-8 px-3">
      <button
        onClick={() => scoreUpdater(false)}
        className="cross bg-red-500 h-40 w-40 rounded-full transition-transform duration-200 ease-in-out transform hover:scale-105 active:scale-90"
      ></button>
      <button
        onClick={() => scoreUpdater(true)}
        className="tick bg-green-500 h-40 w-40 rounded-full transition-transform duration-200 ease-in-out transform hover:scale-105 active:scale-90"
      ></button>
    </div>
  );
}
