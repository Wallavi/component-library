import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Logo from "../atoms/Logo";
import MenuItem from "../atoms/MenuItem";

import minMax from "../assets/minMax.svg";

const MainContainer = styled.div`
  width: 210px;
  height: 100%;
  background: linear-gradient(180deg, #e33aa9 0%, #3b1366 100%);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 20px 20px 20px;
`;

const MinimizeMaximize = styled.figure`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;

export default function Navbar(props) {
  const providersMenu = ["DASHBOARD", "PRODUCTS"];
  const creatorsMenu = ["DASHBOARD", "PRODUCTS"];
  const retailersMenu = [
    "DASHBOARD",
    "PRODUCTS",
    "PROVIDERS",
    "CONTENTOH",
    "TASKS",
  ];

  const [menuItemSelected, setSelectedMenuItem] = useState(retailersMenu[0]);
  const handleOnClickMenuItem = (e) => {
    setSelectedMenuItem(e);
  };

  const handleOnClickMinMax = () => {
    console.log("clicked");
  };

  return (
    <MainContainer {...props}>
      <div>
        <Logo type="WHITE" margin="10px 0 60px 0"></Logo>
        {retailersMenu.map((e) => (
          <MenuItem
            type={e}
            selected={e === menuItemSelected ? true : false}
            onClick={handleOnClickMenuItem}
            margin="5px 0px"
          />
        ))}
      </div>
      <MinimizeMaximize onClick={handleOnClickMinMax}>
        <img src={minMax} alt="Expand or minimize"></img>
      </MinimizeMaximize>
    </MainContainer>
  );
}

Navbar.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  bgColor: PropTypes.string,
  size: PropTypes.oneOf(["SMALL", "BIG"]),
  onClick: PropTypes.func,
};

Navbar.defaultProps = {
  text: "Continuar",
  color: "white",
  bgColor: "#323946",
  size: "SMALL",
};
