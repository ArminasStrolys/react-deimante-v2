import Bala from "../bala/Bala";
import Tvenkinys from "../antras/tvenkinys/Tvenkinys";
import Jura from "../trecias/Jura";
import Vandenynas from "../ketvirtas/Vandenynas";
import Pasaulis from "../penktas/Pasaulis";

function App() {
  return (
    <div className="App">
      <Bala />
      <Tvenkinys />
      <hr />
      <Jura />
      <hr />
      <Vandenynas />
      <hr />
      <Pasaulis />
    </div>
  );
}

export default App;
