import React, { useEffect } from "react";
import BreadCrumb from "../../comman/BreadCrumb";
import ShopProducts from "./ShopProducts";
import SideBar from "./SideBar";
import { useDispatch } from "react-redux";
import { FETCH_ALL_PRODUCTS } from "../../../store/actionLabel/actionLabel";
import { useHistory } from "react-router";

function Shop() {
  const dispatch = useDispatch();
  const history = useHistory();

  const loaddata = async () => {
    dispatch({ type: FETCH_ALL_PRODUCTS });
    if (history.action === "PUSH") {
      window.location.hash = "shop";
    }
  };
  useEffect(() => {
    loaddata();
  }, []);

  return (
    <>
      <BreadCrumb title="Shop"></BreadCrumb>

      <section className="product spad">
        <div className="container">
          <div className="row">
            <SideBar></SideBar>
            <ShopProducts></ShopProducts>
          </div>
        </div>
      </section>
    </>
  );
}

export default Shop;
