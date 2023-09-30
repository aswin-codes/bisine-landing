import About from "./components/About";
import Footer from "./components/Footer";
import HomeSection from "./components/HomeSection";
import NavBar from "./components/NavBar";
import Pricing from "./components/Pricing";
import SampleUI from "./components/SampleUI";

function App() {
  return (
    <>
      <NavBar />
      <HomeSection />
      <About/>
      <SampleUI/>
      <Pricing/>
      <Footer/>
    </>
  );
}

export default App;
