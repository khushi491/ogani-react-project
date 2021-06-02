import React, { useEffect, useState } from "react";
import { X } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  CHANGE_CART,
  REMOVE_ITEM,
} from "../../../store/actionLabel/actionLabel";
import { addtocart } from "../../../store/action/actions";
import ProdQuant from "../shopDetails/ProdQuant";
import "./shop.css";
import { Table } from "react-bootstrap";
function AllCartItems() {
  const dispatch = useDispatch();
  const [cart, setcart] = useState([]);
  const [quantity, setquantity] = useState(0);

  const removeitem = (index) => {
    console.log("hello");
    const olddata = JSON.parse(localStorage.getItem("cartitems"));
    console.log(olddata);
    console.log(index);
    // olddata.splice(index,1)
    console.log(olddata[index]);
    const newdata = olddata.filter((elem) => elem.id != index);
    localStorage.setItem("cartitems", JSON.stringify(newdata));
    window.location.reload();
  };
  const cartproducts = useSelector((state) => state.cartReducer.cartItems);
  useEffect(() => {
    setcart(cartproducts);
  }, [cartproducts]);

  return (
    <div classNameName="col-lg-12">
      <div classNameName="shoping__cart__table">
        <Table responsive>
          <thead>
            <tr>
              <th classNameName="shoping__product">Products</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th> delete</th>
            </tr>
          </thead>
          <tbody>
            {cart &&
              cart.map((element, index) => {
                const { image, title, count, quantity, price, id } = element;
                return (
                  <tr>
                    <td key={id} classNameName="shoping__cart__item cartimage">
                      <div className="img">
                        {" "}
                        <img classNameName="img-fluid" src={image} alt="" />
                        <h5 classNameName="title">
                          {" "}
                          <strong>{title}</strong>
                        </h5>
                      </div>
                    </td>

                    <td classNameName="shoping__cart__price">$ {price}</td>

                    <td classNameName="shoping__cart__quantity">
                      <select
                        value={quantity}
                        onChange={(e) =>
                          dispatch(
                            addtocart({
                              id,
                              price,
                              quantity: e.target.value,
                              title,
                              count,
                              image,
                            })
                          )
                        }
                      >
                        {[...Array(count).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select>
                    </td>

                    <td classNameName="shoping__cart__total">
                      ${Math.floor(price * quantity)}
                    </td>

                    <td classNameName="shoping__cart__item__close">
                      <X
                        style={{ fontSize: 50 }}
                        onClick={() => removeitem(id)}
                        classNameName="icon_close"
                      ></X>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default AllCartItems;
