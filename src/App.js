import React, { useEffect } from "react";
import Footer from "./component/comman/Footer";
import Header from "./component/comman/header";
import Home from "./component/pages/home/Home";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Shop from "./component/pages/shop/Shop";
import Blog from "./component/pages/Blog/Blog";
import Contact from "./component/pages/contact/Contact";
import Cart from "./component/pages/shop/Cart";
import Shopdetail from "./component/pages/shopDetails/Shopdetail";
import axios from "axios";
import {
  FETCH_ALL_PRODUCTS,
  FETCH_CART,
} from "./store/actionLabel/actionLabel";
import { useDispatch } from "react-redux";
import { fetchallProduct } from "./store/action/actions";

function App() {
  const dispatch = useDispatch();

  const loaddata = async () => {
    dispatch(fetchallProduct());
  };
  useEffect(() => {
    loaddata();
  }, []);
  return (
    <div>
      <Header></Header>

      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/shop">
        <Shop></Shop>
      </Route>
      <Route path="/blog">
        <Blog />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/productdetail/:id">
        {" "}
        <Shopdetail />
      </Route>

      <Route path="/cart">
        {" "}
        <Cart />
      </Route>

      <Footer />
    </div>
  );
}

export default App;
