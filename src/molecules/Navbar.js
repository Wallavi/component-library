import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Logo from "../atoms/Logo";
import MenuItem from "../atoms/MenuItem";

import minMax from "../assets/minMax.svg";

const MainContainer = styled.div`
  width: ${(props) => (props.minimized ? "58px" : "210px")};
  height: 100%;
  background: linear-gradient(180deg, #e33aa9 0%, #3b1366 100%);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: ${(props) => (props.minimized ? "center" : "flex-end")};
  padding: ${(props) => (props.minimized ? "20px 0px" : "20px")};
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MinimizeMaximize = styled.figure`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  transform: ${(props) => (props.minimized ? "rotate(180deg)" : null)};
`;

export default function Navbar(props) {
  const [menuItemSelected, setSelectedMenuItem] = useState(props.menu[0]);
  const handleOnClickMenuItem = (e) => {
    setSelectedMenuItem(e);
  };

  const [minimized, setminimized] = useState(props.minimized);
  const handleOnClickMinMax = () => {
    setminimized(!minimized);
  };

  return (
    <MainContainer {...props} minimized={minimized}>
      <InnerContainer>
        <Logo
          type="WHITE"
          margin="10px 0 60px 0"
          padding={minimized ? "0px 10px" : null}
          minimized={minimized}
        ></Logo>
        {props.menu.map((e) => (
          <MenuItem
            type={e}
            selected={e === menuItemSelected ? true : false}
            onClick={handleOnClickMenuItem}
            margin="5px 0px"
            minimized={minimized}
          />
        ))}
      </InnerContainer>

      <MinimizeMaximize onClick={handleOnClickMinMax} minimized={minimized}>
        <img src={minMax} alt="Expand or minimize"></img>
      </MinimizeMaximize>
    </MainContainer>
  );
}

Navbar.propTypes = {
  minimized: PropTypes.bool,
};

Navbar.defaultProps = {
  minimized: false,
};
