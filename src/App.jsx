import "./App.css";
import CheckBox from "./components/CheckBox.jsx";
import Formulaire from "./components/Formulaire.jsx";
import Titre from "./components/Titre.jsx";

function App() {
  return (
    <div
      className="p-6 m-6 sm:w-1/2 
      flex flex-col justify-center items-center gap-3 
      sm:border-4 sm:rounded-lg sm:border-gray-300 font-sans"
    >
      <Titre />
      <Formulaire />
      <CheckBox />
    </div>
  );
}

export default App;
