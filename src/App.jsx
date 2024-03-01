import Contador from "./components/Contador";
import ItemListContainer from "./components/ItemListContainer";
import Text from "./components/Text";

import "./style/App.css";

function App() {
  return (
    <div className="app">
      <Contador />
      <Text />
      <ItemListContainer />
    </div>
  );
}

export default App;
