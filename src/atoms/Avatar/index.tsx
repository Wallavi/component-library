import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

interface MainContainerStylesProps {
  width: string;
  height: string;
  radius: string;
}

interface MainContainerProps extends MainContainerStylesProps {
  source?: string;
}

const MainContainer = styled.figure<MainContainerStylesProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.radius};
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
  object-fit: cover;
  flex-shrink: 0;
`;

export default function Avatar({ source, ...props }: MainContainerProps) {
  return (
    <MainContainer {...props}>
      <img src={source} alt=""></img>
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
