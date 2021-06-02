import React, { useEffect, useState } from "react";
import RangeSlider from "react-bootstrap-range-slider";
import { Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getproductbycategory } from "../../../store/action/actions";
import "./shop.css";
function SideBar() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.ProductReducer.Product);
  const [latest, setlatest] = useState([]);
  const [value, setValue] = useState([]);
  useEffect(() => {
    if (state) {
      setlatest(state.slice(0, 3));
    }
  }, [state]);
  console.log(latest);
  const [min, setmin] = useState();
  const [max, setmax] = useState();
  console.log(min, max);
  return (
    <div className="col-lg-3 col-md-5">
      <div className="sidebar">
        <div className="sidebar__item">
          <h4>Department</h4>
          <ul>
            <li>
              <NavLink
                className="department"
                onClick={() => dispatch(getproductbycategory("freshMeat"))}
                to="#"
              >
                Fresh Meat
              </NavLink>
            </li>
            <li>
              <NavLink
                className="department"
                onClick={() => dispatch(getproductbycategory(`vegetables`))}
                to="#"
              >
                Vegetables
              </NavLink>
            </li>
            <li>
              <NavLink
                className="department"
                onClick={() =>
                  dispatch(getproductbycategory(`fruitAndNutGifts`))
                }
                to="#"
              >
                Fruit & Nut Gifts
              </NavLink>
            </li>
            <li>
              <NavLink
                className="department"
                onClick={() => dispatch(getproductbycategory(`freshBerries`))}
                to="#"
              >
                Fresh Berries
              </NavLink>
            </li>
            <li>
              <NavLink
                className="department"
                onClick={() => dispatch(getproductbycategory(`oceanFoods`))}
                to="#"
              >
                Ocean Foods
              </NavLink>
            </li>
            <li>
              <NavLink
                className="department"
                onClick={() => dispatch(getproductbycategory(`butterAndEggs`))}
                to="#"
              >
                Butter & Eggs
              </NavLink>
            </li>
            <li>
              <NavLink
                className="department"
                onClick={() => dispatch(getproductbycategory(`fastfood`))}
                to="#"
              >
                Fastfood
              </NavLink>
            </li>
            <li>
              <NavLink
                className="department"
                onClick={() => dispatch(getproductbycategory(`freshOnion`))}
                to="#"
              >
                Fresh Onion
              </NavLink>
            </li>
            <li>
              <NavLink
                className="department"
                onClick={() =>
                  dispatch(getproductbycategory(`papayaAndCrisps`))
                }
                to="#"
              >
                Papayaya & Crisps
              </NavLink>
            </li>
            <li>
              <NavLink
                className="department"
                onClick={() => dispatch(getproductbycategory(`oatmeal`))}
                to="#"
              >
                Oatmeal
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="sidebar__item">
          <h4>Price</h4>
          <div className="price-range-wrap">
            <div className="range-slider">
              <div className="">
                <RangeSlider
                  value={min}
                  onChange={(e) => setmin(e.target.value)}
                  min={0}
                  max={100}
                />

                <RangeSlider
                  value={max}
                  onChange={(e) => setmax(e.target.value)}
                  min={100}
                  max={500}
                />
              </div>
            </div>
            <Button
              variant="outlined"
              onClick={() =>
                dispatch({ type: "SET_PRICE", payload: { max: max, min: min } })
              }
              p="3"
            >
              Search
            </Button>
          </div>
        </div>
        <div className="sidebar__item sidebar__item__color--option">
          <h4>Colors</h4>
          <div className="sidebar__item__color sidebar__item__color--white">
            <label for="white">
              White
              <input id="white" type="radio" />
            </label>
          </div>
          <div className="sidebar__item__color sidebar__item__color--gray">
            <label for="gray">
              Gray
              <input type="radio" id="gray" />
            </label>
          </div>
          <div className="sidebar__item__color sidebar__item__color--red">
            <label for="red">
              Red
              <input type="radio" id="red" />
            </label>
          </div>
          <div className="sidebar__item__color sidebar__item__color--black">
            <label for="black">
              Black
              <input type="radio" id="black" />
            </label>
          </div>
          <div className="sidebar__item__color sidebar__item__color--blue">
            <label for="blue">
              Blue
              <input type="radio" id="blue" />
            </label>
          </div>
          <div className="sidebar__item__color sidebar__item__color--green">
            <label for="green">
              Green
              <input type="radio" id="green" />
            </label>
          </div>
        </div>

        <div className="sidebar__item">
          <div className="latest-product__text">
            <h4>Latest Products</h4>
            <div className="latest-product__slider owl-carousel">
              <div className="latest-prdouct__slider__item">
                {latest.map((elem) => (
                  <a href="#" className="latest-product__item">
                    <div className="latest-product__item__pic">
                      <img src={elem?.image} alt={elem?.title} />
                    </div>
                    <div className="latest-product__item__text">
                      <h6>{elem?.title}</h6>
                      <span>{elem?.price}</span>
                    </div>
                  </a>
                ))}
              </div>
              <div className="latest-prdouct__slider__item">
                <a href="#" className="latest-product__item">
                  <div className="latest-product__item__pic">
                    <img src={latest[0]?.image} alt="" />
                  </div>
                  <div className="latest-product__item__text">
                    <h6>{latest[0]?.title}</h6>
                    <span>$30.00</span>
                  </div>
                </a>
                <a href="#" className="latest-product__item">
                  <div className="latest-product__item__pic">
                    <img src="img/latest-product/lp-2.jpg" alt="" />
                  </div>
                  <div className="latest-product__item__text">
                    <h6>Crab Pool Security</h6>
                    <span>$30.00</span>
                  </div>
                </a>
                <a href="#" className="latest-product__item">
                  <div className="latest-product__item__pic">
                    <img src="img/latest-product/lp-3.jpg" alt="" />
                  </div>
                  <div className="latest-product__item__text">
                    <h6>Crab Pool Security</h6>
                    <span>$30.00</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
