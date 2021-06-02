import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BreadCrumb from "../../comman/BreadCrumb";
import AllCartItems from "./AllCartItems";

function Cart() {
  let quantity = 0;
  const [cart, setcart] = useState([]);
  let total = 0;
  window.location.hash = "cart";
  const cartproducts = useSelector((state) => state.cartReducer.cartItems);
  useEffect(() => {
    setcart(cartproducts);
  }, [cartproducts]);
  cart.map((elem) => {
    quantity = elem.quantity;
    total = total + quantity * elem.price;
  });

  return (
    <div>
      <BreadCrumb title="Shopping Cart"></BreadCrumb>
      <section className="shoping-cart spad">
        <div className="container">
          <div className="row">
            <AllCartItems></AllCartItems>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="shoping__cart__btns">
                <a href="#" className="primary-btn cart-btn">
                  CONTINUE SHOPPING
                </a>
                <a href="#" className="primary-btn cart-btn cart-btn-right">
                  <span className="icon_loading"></span>
                  Upadate Cart
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="shoping__continue">
                <div className="shoping__discount">
                  <h5>Discount Codes</h5>
                  <form action="#">
                    <input type="text" placeholder="Enter your coupon code" />
                    <button type="submit" className="site-btn">
                      APPLY COUPON
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="shoping__checkout">
                <h5>Cart Total</h5>
                <ul>
                  <li>
                    Subtotal <span>$ {Math.floor(total)}</span>
                  </li>

                  <li>
                    Total{" "}
                    {total > 0 ? (
                      <span>$ {Math.floor(total)}</span>
                    ) : (
                      <span>cart is empty </span>
                    )}{" "}
                  </li>
                </ul>
                <a href="#" className="primary-btn">
                  PROCEED TO CHECKOUT
                </a>
              </div>
            </div>
          </div>
        </div>{" "}
      </section>{" "}
    </div>
  );
}

export default Cart;
