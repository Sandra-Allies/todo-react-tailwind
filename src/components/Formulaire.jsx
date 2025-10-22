import { useState } from "react";

function Formulaire({ onAddTask }) {
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask(newTask);
    setNewTask("");
  };
  
  return (
    <div className="form w-screen lg:w-full">
      <form
        onSubmit={handleSubmit}
        className="pl-4 pr-4 flex flex-row justify-between gap-3"
      >
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="form-input text-xl text-gray-500 w-10/12 pl-4 border border-2 border-gray-200 rounded-lg 
        focus:border-blue-500 focus:border-3 focus:ring-blue-200 focus:ring-3 outline-none"
          placeholder="Ajouter une nouvelle tâche..."
        />
        <button
          type="submit"
          className=" hidden lg:block
      form-btn bg-blue-500 hover:bg-blue-600 hover:shadow-lg text-white text-2xl font-semibold w-2/12 p-2 rounded-lg"
        >
          Ajouter
        </button>

        <button
          type="submit"
          className="block lg:hidden
      form-btn bg-blue-500 hover:bg-blue-600 hover:shadow-lg text-white text-xl font-semibold w-2/12 p-2 rounded-lg"
        >
          +
        </button>
      </form>
    </div>
  );
}

export default Formulaire;
