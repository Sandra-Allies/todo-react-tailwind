import "./App.css";
import { useState } from "react";
import CheckBox from "./components/CheckBox.jsx";
import Formulaire from "./components/Formulaire.jsx";
import Titre from "./components/Titre.jsx";

function App() {
      const [tasks, setTasks] = useState([
        { id: 1, name: "Faire les courses", checked: false },
        { id: 2, name: "Apprendre React", checked: false },
        { id: 3, name: "Préparer la présentation", checked: false },
        { id: 4, name: "Réviser Javascript", checked: false },
      ]);
      
  const handleClick = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task
      )
    );
  };

      const ajouterTache = (nomTache) => {
        if (!nomTache.trim()) return;

        const nouvelleTache = {
          id: Date.now(),
          name: nomTache,
          checked: false,
        };

        setTasks([...tasks, nouvelleTache]);
      }

  return (
    <div
      className="p-6 lg:m-6 w-screen lg:w-4/5 h-full
      flex flex-col justify-center items-center gap-3 
      lg:border-4 lg:rounded-lg lg:border-gray-300 font-sans"
    >
      <Titre />
      <Formulaire onAddTask={ajouterTache} />
      <CheckBox afficherTache={tasks} handleClick={handleClick} />
    </div>
  );
}

export default App;
