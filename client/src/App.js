// import logo from './logo.svg';

import "./App.css";
import { Footer } from "./components/common/Footer";
import { Header } from "./components/common/Header";
import { HeaderMobile } from "./components/common/HeaderMobile";
import { About } from "./components/sections/About";
import { Benefits } from "./components/sections/Benefits";
import { Contacts } from "./components/sections/Contacts";
import { Main } from "./components/sections/Main";
import { Projects } from "./components/sections/Projects";
import { Reviews } from "./components/sections/Reviews";
import { Sale } from "./components/sections/Sale";
import { Services } from "./components/sections/Services";

function App() {
  return (
    <div className="App">
      <Header />
      <HeaderMobile />
      <Main />
      <Services />
      <About />
      <Sale />
      <Projects />
      <Reviews />
      <Benefits />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;

// <header className="App-header">
// <img src={logo} className="App-logo" alt="logo" />
// <p>
//   Edit <code>src/App.js</code> and save to reload.
// </p>
// <a
//   className="App-link"
//   href="https://reactjs.org"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   Learn React
// </a>
// </header>
