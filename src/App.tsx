import Clock from "./components/Clock";
import Timer from "./components/Timer";
import Todo from "./components/Todo";
import "./App.css";

function App() {

  return (
    <div>
      <h1> Clock worker & writing notes </h1>
      <div className="container">
        <Clock />
        <Timer />
        <Todo />
      </div>
      
    </div>
  )
}

export default App
