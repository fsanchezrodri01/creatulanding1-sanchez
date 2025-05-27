import NavBar, { CategoriesBar } from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <CategoriesBar />
      <ItemListContainer texto="Creamos soluciones digitales con tecnología de vanguardia" />
    </div>
  );
}

export default App;
