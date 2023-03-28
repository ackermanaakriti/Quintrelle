
import './App.css';
import Home from './Components/Body/Home';
import  {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import About from './Components/Body/About';
import Shop from './Components/Body/Shop';
import Product from './Components/Body/Product';
import Contact from './Components/Body/Contact';
import Singleprd from './Components/Body/Singleprd';
import Cart from './Components/Body/Cart';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './Components/GlobalComp';

    import Nav from './Components/Navbar/Nav';
const  App=()=> {
  const theme={
    color:
    {
     bg:"#F3E3C3"
    },
    media:
    {
      mobile:"768px",
      tab:"998px"
    }
  }
  return (
   <>
  <ThemeProvider theme={theme}>
   <Router>
   <GlobalStyle/>
   <Nav/>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/product' element={<Product/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/singleproduct' element={<Singleprd/>} />
        <Route path='/cart' element={<Cart/>} />

      </Routes>
      </Router>
      </ThemeProvider>
      
     
      
   </>
  );
}

export default App;
