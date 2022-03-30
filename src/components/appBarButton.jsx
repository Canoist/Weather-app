import React from "react";
import PropTypes from "prop-types";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const AppBarButton = ({ page, onClickCloseMenu }) => {
  return (
    <Button
      onClick={onClickCloseMenu}
      sx={{ my: 2, color: "white", display: "block" }}
    >
      <Link
        style={{ textDecoration: "none", color: "white" }}
        to={`/${page !== "Main" ? page.toLowerCase() : ""}`}
      >
        {page}
      </Link>
    </Button>
  );
};

AppBarButton.propTypes = {
  page: PropTypes.string,
  onClickCloseMenu: PropTypes.func
};

export default AppBarButton;
