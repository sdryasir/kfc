import './App.css';
import Header from './components/Header';
import Login from './pages/Login';
import Home from './pages/Home';
import Product from './pages/Product'
import Order from './pages/Order'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import EditProduct from './pages/Product/EditProduct';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <div class="container-fluid">
          <div class="row">
            <Routes>
              <Route path="/" element={<Login />}/>
              <Route path='/home' element={<Home />} />
              <Route path='/products' element={<Product />} />
              <Route path='/orders' element={<Order />} />
              <Route path='/edit-product/:id' element={<EditProduct />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
