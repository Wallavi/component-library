import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const MainContainer = styled.input`
  background: white;
  color: rgb(50, 57, 70);
  border-radius: 5px;
  padding: 10px 20px;
  border: 1px solid rgb(153, 167, 191);
`;

export default function Input(props) {
  return <MainContainer onClick={props.onClick} />;
}

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
