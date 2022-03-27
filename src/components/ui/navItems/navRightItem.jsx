import React from "react";
import PropTypes from "prop-types";
import LinkTab from "./linkTab";

const NavRightItem = ({ isLoggedIn }) => {
  return isLoggedIn ? (
    <div>ПРОФИЛЬ</div>
  ) : (
    <LinkTab label="Login" aria-current="page" href="/login">
      Login
    </LinkTab>
  );
};

NavRightItem.propTypes = {
  isLoggedIn: PropTypes.bool
};

export default NavRightItem;
