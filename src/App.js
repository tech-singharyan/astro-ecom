import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
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
