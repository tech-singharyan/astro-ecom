import './App.css';
import Navbar from './components/pageobject/Navbar';
import Banner from './components/pageobject/Banner';
import Card from './components/Card';
import Categories from './components/Categories';

function App() {
  return (
    <div className="App">
       <Navbar/>
       <Banner/>
       <Categories />
    </div>
  );
}

export default App;
