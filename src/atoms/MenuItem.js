import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const MainContainer = styled.div`
  background: ${(props) => (props.selected ? "black" : null)};
  cursor: pointer;
  border-radius: 100px;
  background: pink;
  display: flex;
  align-items: center;
  padding: 10px;
  height: 34px;
  color: white;
  p {
    font-family: "Raleway";
    font-size: 18px;
    font-weight: ${(props) => (props.selected ? "700" : "700")};
  }
`;

export default function Button(props) {
  const types = {
    DASHBOARD: {
      image: "",
      text: "Dashboard",
    },
    PRODUCTS: {
      image: "",
      text: "Productos",
    },
    PROVIDERS: {
      image: "",
      text: "Proveedor",
    },
    TASKS: {
      image: "",
      text: "Tareas",
    },
    dashboard: {
      image: "",
      text: "Dashboard",
    },
  };

  return (
    <MainContainer {...props} onClick={props.onClick}>
      <figure>
        <img src={""}></img>
      </figure>
      <p>{types[props.type].text}</p>
    </MainContainer>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf(["DASHBOARD", "PROVIDERS", "PRODUCTS", "TASKS"]),
};

Button.defaultProps = {
  type: "DASHBOARD",
};
