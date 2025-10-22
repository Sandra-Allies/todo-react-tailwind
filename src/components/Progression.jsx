function Progression() {
  return (
    <div
      className="container-progress mb-4 bg-blue-50 border-blue-200 border-2 w-full p-4 rounded-lg
    flex flex-col justify-between item-center gap-3"
    >
      <div className="top flex flex-row justify-between item-center">
        <h1 className="text-xl text-gray-600 font-normal">Tâches restantes</h1>
        <h2 className="text-xl text-blue-500 font-bold">3 / 5</h2>
      </div>
      <div className="mid self-center w-full bg-gray-200 rounded-full h-3 overflow-hidden">
      </div>
      <div className="bottom self-end text-gray-500">40% complétées</div>
    </div>
  );
}

export default Progression;
