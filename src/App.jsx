import "./App.css";
import CheckBox from "./components/CheckBox.jsx";
import Formulaire from "./components/Formulaire.jsx";
import Titre from "./components/Titre.jsx";

function App() {
  return (
    <div
      className="p-6 lg:m-6 w-screen lg:w-4/5 h-full
      flex flex-col justify-center items-center gap-3 
      lg:border-4 lg:rounded-lg lg:border-gray-300 font-sans"
    >
      <Titre />
      <Formulaire />
      <CheckBox />
    </div>
  );
}

export default App;
