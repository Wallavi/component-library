import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import dashboardIcon from "../assets/dashboardMenu.svg";
import productsIcon from "../assets/productsMenu.svg";
import providersIcon from "../assets/providersMenu.svg";
import contentohIcon from "../assets/contentohMenu.svg";
import tasksIcon from "../assets/tasksMenu.svg";

const MainContainer = styled.div`
  cursor: pointer;
  border-radius: 100px;
  display: flex;
  align-items: center;
  height: 44px;
  color: white;
  figure {
    width: 24px;
    height: 24px;
    margin: 0 10px 0 15px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  p {
    font-family: "Raleway";
    font-size: 18px;
    font-weight: ${(props) => (props.selected ? "700" : "700")};
  }
  border: ${(props) =>
    props.selected ? "1px solid #e33aa9" : "1px solid rgba(0, 0, 0, 0)"};
  &:hover {
    border: 1px solid #e33aa9;
  }
`;

export default function Button(props) {
  const types = {
    DASHBOARD: {
      image: dashboardIcon,
      text: "Dashboard",
    },
    PRODUCTS: {
      image: productsIcon,
      text: "Productos",
    },
    PROVIDERS: {
      image: providersIcon,
      text: "Proveedor",
    },
    TASKS: {
      image: tasksIcon,
      text: "Tareas",
    },
    CONTENTOH: {
      image: contentohIcon,
      text: "Content Oh!",
    },
  };

  return (
    <MainContainer {...props} onClick={props.onClick}>
      <figure>
        <img src={types[props.type].image} alt="Menu"></img>
      </figure>
      <p>{types[props.type].text}</p>
    </MainContainer>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf([
    "DASHBOARD",
    "PROVIDERS",
    "PRODUCTS",
    "TASKS",
    "CONTENTOH",
  ]),
  selected: PropTypes.bool,
};

Button.defaultProps = {
  type: "DASHBOARD",
};
