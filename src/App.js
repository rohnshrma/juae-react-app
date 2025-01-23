import About from "./About";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Book from "./Book";
import books from "./data.js";
import Counter from "./Counter.js";
import Timer from "./Timer.js";
import Form from "./Form.js";
function App() {
  console.log("App Running");

  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <Timer /> */}
      <Form />
    </div>
  );
}

export default App;
