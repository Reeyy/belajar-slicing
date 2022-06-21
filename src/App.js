import About from "./Components/About ";
import Features from "./Components/Features";
import Navbar from "./Components/Navbar";
import Pricing from "./Components/Pricing";
import Review from "./Components/Review";
import Testimonials from "./Components/Testimonials";

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Features />
      <div className="bg-bgGray">
        <Pricing />
        <Testimonials />
        <Review />
      </div>

      <div className="mt-96"></div>
    </div>
  );
}

export default App;
