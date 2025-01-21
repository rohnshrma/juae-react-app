import About from "./About";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Book from "./Book";
import books from "./data.js";
import Counter from "./Counter.js";

function App() {
  console.log("App Running");

  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
