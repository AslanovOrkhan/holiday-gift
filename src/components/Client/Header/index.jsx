import React, { useState } from "react";
import "./header.css";
import { Link, useNavigate } from "react-router";
 
import { useAuth } from "../../../Services/Context/AuthContext";
const ClientHeader = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { user } = useAuth();
  return (
    <div>
      <header>
        <Link to={"/"} className="logo">
          By.Orkhan
        </Link>
        <nav>
          <ul>
            <li>
              <Link to={"/"}>home</Link>
            </li>
            <li>
              <Link to={"/cars"}>cars</Link>
            </li>
          </ul>
        </nav>
        <div className="user-profile" onClick={() => setToggleMenu(!toggleMenu)}>
          { <img src="https://mixmag.com.tr/assets/uploads/images/_columns2/rihanna-june-19-1.jpg" alt="" />}
          <ul className={`user-content ${toggleMenu ? "active" : "inactive"}`}>
            <li>
              <a>login</a>
            </li>
            <li>
              <a>logout</a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default ClientHeader;
