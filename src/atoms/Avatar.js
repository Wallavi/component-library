import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const MainContainer = styled.figure`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.radius};
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
  object-fit: cover;
`;

export default function Avatar(props) {
  return (
    <MainContainer {...props}>
      <img src={props.source} alt=""></img>
    </MainContainer>
  );
}

Avatar.propTypes = {
  source: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  radius: PropTypes.string,
};

Avatar.defaultProps = {
  width: "50px",
  height: "50px",
  radius: "1000px",
};
