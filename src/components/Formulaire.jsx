function Formulaire() {
return (
  <div className="form m-6 w-full">
    <form className="pl-6 pr-6 flex flex-row justify-between gap-3">
      <input
        type="text"
        name=""
        className="form-input text-xl text-gray-500 w-3/4 p-4 border border-2 border-gray-200 rounded-lg 
        focus:border-blue-500 focus:border-3 focus:ring-blue-200 focus:ring-3 outline-none"
        placeholder="Ajouter une nouvelle tâche..."
      />
      <button
        className=" hidden sm:block
      form-btn bg-blue-500 hover:bg-blue-600 hover:shadow-lg text-white text-xl font-semibold w-1/4 p-4 rounded-lg"
      >
        Ajouter
      </button>

      <button
        className="block sm:hidden
      form-btn bg-blue-500 hover:bg-blue-600 hover:shadow-lg text-white text-xl font-semibold w-1/4 p-4 rounded-lg"
      >
        +
      </button>
    </form>
  </div>
);
}

export default Formulaire