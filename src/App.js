import './App.css';
import {data} from './db'
import Card from "./components/Card/Card";

function App() {
  return (
    <div className="App">
      <Card {...data}/>
    </div>
  );
}

export default App;
