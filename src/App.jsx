import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import AllTheBooks from "./components/AllTheBooks";

function App() {
  return (
    <div className="App">
      <>
        <header>
          <MyNav />
        </header>

        <AllTheBooks />
        <MyFooter />
      </>
    </div>
  );
}

export default App;
