import "./LandingPage.css";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTypes } from "../../../actions/index.js";
import { NavLink } from "react-router-dom";

export function LandingPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  return (
    <div className="LandingPage">
      <div>
        <NavLink to="/home">
          <button className="btn">Get started!</button>
        </NavLink>
      </div>
    </div>
  );
}
