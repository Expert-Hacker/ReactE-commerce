
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Components/Header';
import Homepage from './Components/HomePage';
import CartDetails from './Components/CartDetails';
import ProductDetails from './Components/ProductDetails';
import Error404 from './Components/Error404';
import { useState } from 'react';

function App() {
  if(localStorage.getItem('cartDetails')==null)
  {
    localStorage.setItem('cartDetails',JSON.stringify([]))
  }

  const [text, setText] = useState((JSON.parse(localStorage.getItem('cartDetails')).length));
  // const[val,setcNo]=useState((JSON.parse(localStorage.getItem('cartDetails')).length))
 const [id, setId]=useState("");
  return (
    <>
      <BrowserRouter>
      <Header text={text}/>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/cart-details" component={()=> <CartDetails cno={setText} />} />
          <Route
            exact
            path="/products-details/:id"
            component={() => <ProductDetails setTxt={setText}  abc={setId} />}
          />
          <Route component={Error404} />
        </Switch>
      </BrowserRouter>

    </>
  );
}

export default App;
