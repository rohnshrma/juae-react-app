import About from "./About";
import "./App.css";
import Book from "./Book";
import books from "./data.js";

function App() {
  return (
    <div className="App">
      {/* About({head: "panda", para : "cute fluffy animal"}) */}
      <About
        head="Panda"
        para="Cute Fluffy Animal"
        img="https://i.pinimg.com/736x/a8/fc/c3/a8fcc353a0f6c38ee8329e321853c134.jpg"
      />
      <About
        head="Cheetah"
        para="Fastest Animal"
        img="https://cdn.britannica.com/98/152298-050-8E45510A/Cheetah.jpg"
      />

      <div className="Books">
        {books.map(function (book, index) {
          return (
            <Book
              title={book.title}
              author={book.author}
              address={book.image}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
