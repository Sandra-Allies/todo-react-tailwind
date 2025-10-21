import { X, Clipboard } from "lucide-react";

function CheckBox({ afficherTache, handleClick, supprimerTache }) {
  if (afficherTache.length === 0) {
    return (
      <div className="min-h-screen w-screen md:w-full flex flex-col justify-center items-center gap-3">
        <div className="text-gray-300 pb-3">
          <Clipboard size={160} />
        </div>
        <h1 className="text-gray-500 text-2xl">Aucune tâche pour le moment</h1>
        <p className="text-gray-400 text-lg">
          Ajoutez votre première tâche ci-dessus !
        </p>
      </div>
    );
  } else {
    return (
      <div className="min-h-screen w-screen md:w-full">
        <ul className="flex flex-col gap-3 justify-center items-center">
          {afficherTache.map((task) => (
            <li
              key={task.id}
              onClick={() => handleClick(task.id)}
              className={`border border-2 border-gray-100 rounded-lg 
            w-full 
            flex flex-row gap-3 
            p-5 justify-between text-lg
            box-border
            hover:border-2
            hover:shadow-md
            ${task.checked ? "bg-gray-50" : ""}`}
            >
              <div className="flex flex-row justify-start items-center gap-3">
                <input
                  type="checkbox"
                  id={task.id}
                  name={task.name}
                  checked={task.checked}
                  onChange={() => handleClick(task.id)}
                  className="w-5 h-5"
                />
                <label
                  className={task.checked ? "text-gray-400 line-through" : ""}
                  htmlFor="courses"
                >
                  {task.name}
                </label>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  supprimerTache(task.id);
                }}
                className="p-2 text-center text-red-500 hover:bg-red-50 hover:text-red-700 rounded-lg"
              >
                <X />
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CheckBox;
