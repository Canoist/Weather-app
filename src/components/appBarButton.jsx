import React from "react";
import PropTypes from "prop-types";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const AppBarButton = ({ page, onClickCloseMenu, otherStyles }) => {
  return (
    <Button
      onClick={onClickCloseMenu}
      sx={{ my: 2, color: "white", display: "block", ...otherStyles }}
    >
      <Link
        style={{
          textDecoration: "none",
          color: "white",
          textAlign: "center"
        }}
        to={`/${page !== "Main" ? page.toLowerCase() : ""}`}
      >
        {page}
      </Link>
    </Button>
  );
};

AppBarButton.propTypes = {
  page: PropTypes.string,
  onClickCloseMenu: PropTypes.func,
  otherStyles: PropTypes.object
};

export default AppBarButton;
