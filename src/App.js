import { BrowserRouter } from "react-router-dom";
import "./index.css"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Services from "./components/Services";
import Connect from "./components/Connect";
import Footer from "./components/Footer";

function App() {
  return (
   <main className="min-h-screen">
      <BrowserRouter>
         <Navbar />
         <Hero />
         <About />
         <Gallery />
         <Services />
         <Connect />
         <Footer />
      </BrowserRouter>
   </main>
  );
}

export default App;
