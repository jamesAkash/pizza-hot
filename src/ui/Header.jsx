import React from "react";
import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

const Header = () => {
  return (
    <header>
      <Link to="/">Pizza🔥.Co</Link>
      <SearchOrder />
      <p>Akash</p>
    </header>
  );
};

export default Header;
