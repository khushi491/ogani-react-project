import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { getproductbycategory } from "../../store/action/actions";

function Department() {
  const dispatch = useDispatch();
  return (
    <div className="hero__categories">
      <div className="hero__categories__all">
        <i className="fa fa-bars"></i>
        <span>All departments</span>
      </div>
      <ul>
        <li>
          <NavLink
            onClick={() => dispatch(getproductbycategory("freshMeat"))}
            to="/shopGrid"
          >
            Fresh Meat
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => dispatch(getproductbycategory(`vegetables`))}
            to="/shopGrid"
          >
            Vegetables
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => dispatch(getproductbycategory(`fruitAndNutGifts`))}
            to="/shopGrid"
          >
            Fruit & Nut Gifts
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => dispatch(getproductbycategory(`freshBerries`))}
            to="/shopGrid"
          >
            Fresh Berries
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => dispatch(getproductbycategory(`oceanFoods`))}
            to="/shopGrid"
          >
            Ocean Foods
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => dispatch(getproductbycategory(`butterAndEggs`))}
            to="/shopGrid"
          >
            Butter & Eggs
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => dispatch(getproductbycategory(`fastfood`))}
            to="/shopGrid"
          >
            Fastfood
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => dispatch(getproductbycategory(`freshOnion`))}
            to="/shopGrid"
          >
            Fresh Onion
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => dispatch(getproductbycategory(`papayaAndCrisps`))}
            to="/shopGrid"
          >
            Papayaya & Crisps
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => dispatch(getproductbycategory(`oatmeal`))}
            to="/shopGrid"
          >
            Oatmeal
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Department;
