import logo from './logo.svg';
import './App.css';
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Header from './Components/Header';
import Footer from './Components/Footer';
import CarouselComponent from './Components/Carousel';

import Products from './Components/Products';
import About from './Components/About';
import Welcome from './Pages/Welcome';
import WelcomeFr from './Pages/WelcomeFr';
import HowToUse from './Components/HowToUse';


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route exact path="/welcome" element={<Welcome />} />
    <Route exact path="/welcomeFr" element={<WelcomeFr />} />
    <Route exact path="/" element={<HowToUse />} />
    <Route exact path="/footer" element={<Footer />} />
    <Route exact path='/about' element={<About/>}></Route>
    <Route exact path='/products' element={<Products/>}></Route>
   
    </Routes>
    </BrowserRouter>
  );
}

export default App;
