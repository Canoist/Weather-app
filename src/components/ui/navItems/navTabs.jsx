import React from "react";
import { Box, Tabs } from "@mui/material";
import LinkTab from "./linkTab";
import NavRightItem from "./navRightItem";
// import { Link } from "react-router-dom";

const NavTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        p: 1,
        px: 3,
        m: 1,
        borderRadius: 1
      }}
    >
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          {/* <Link to="/">Main2</Link>
          <Link to="/login">Login2</Link> */}
          <LinkTab label="Main" href="/" />
          <LinkTab label="Page Two" href="/login" />
          <LinkTab label="Page Three" href="/spam" />
        </Tabs>
      </Box>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <NavRightItem isLoggedIn={false} />
      </Box>
    </Box>
  );
};
export default NavTabs;
