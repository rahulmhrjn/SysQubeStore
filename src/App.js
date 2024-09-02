import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './components/Products';
import Product from './components/Product';
import Cart from './components/Cart';
import OrderSummary from './components/OrderSummary';
import ShippingInformation from './components/ShippingInformation';
import PaymentInformation from './components/PaymentInformation';
import Login from './authentication/Login';
import Register from './authentication/Register';
import Success from './components/Success';

function App() {
  return (
    <>
      <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path='/products/:id' element={<Product/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<OrderSummary/>}/>
          <Route path='/shipping' element={<ShippingInformation/>}/>
          <Route path='/payment' element={<PaymentInformation/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/success' element={<Success/>}/>
        </Routes>
    </>
  );
}

export default App;