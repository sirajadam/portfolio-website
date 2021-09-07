import Header from "./components/header/Header";
import "./App.css";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <main className="app">
      <Header />
      <About />
      <Projects />
      {/* <a href="https://storyset.com/web">Web illustrations by Storyset</a> */}
    </main>
  );
}

export default App;
