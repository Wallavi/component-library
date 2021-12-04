import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const MainContainer = styled.div`
  position: relative;
  height: 160px;
  border-radius: 10px;
  border: 1px solid #8894ac;
  padding: 33px 18px 32px;
  margin: 25px 0px;
`;

export default function SelectLocation(props) {
  return <MainContainer></MainContainer>;
}

SelectLocation.propTypes = {};
