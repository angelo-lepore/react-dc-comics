// bootstrap

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// header, main, footer
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

// arrays
import navItems from "./db/navItems";
import comics from "./db/comics";
import market from "./db/market";
import dcComics from "./db/dcComics";
import dc from "./db/dc";
import shop from "./db/shop";
import sites from "./db/sites";

// Components
import ProductCard from "./components/ProductCard";
import Logo from "./components/Logo";

// App function
function App() {
  return (
    <>
      <Header navItems={navItems} Logo={Logo} />

      <Main comics={comics} market={market} ProductCard={ProductCard} />

      <Footer dcComics={dcComics} dc={dc} shop={shop} sites={sites} />
    </>
  );
}

// Export App component
export default App;
