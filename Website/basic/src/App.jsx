import About from "./components/About/About";
import Contacts from "./components/Contact/Contacts";
import Intro from "./components/Intro/Intro";
import ProductList from "./components/ProductList/ProductList";


const App = () => {
  return (
    <div>
      <Intro/>
      <About/>
      <ProductList/>
      <Contacts/>
    </div>
  )
};

export default App;