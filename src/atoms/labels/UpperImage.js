import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Avatar from "../Avatar";
import defaultImage from "../../assets/notFound.svg";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    margin-top: 20px;
    color: white;
  }
  margin: 15px 0;
`;

export default function UpperImage(props) {
  return (
    <MainContainer>
      <Avatar source={props.source}></Avatar>
      <p>{props.label}</p>
    </MainContainer>
  );
}

UpperImage.propTypes = {
  source: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

UpperImage.defaultProps = {
  source: defaultImage,
  label: "La búsqueda no ha arrojado resultados",
};
