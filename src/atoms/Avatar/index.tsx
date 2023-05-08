import React from "react";
import styled from "styled-components";

interface MainContainerStylesProps {
  width?: string;
  height?: string;
  radius?: string;
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

export default function Avatar({ source, width="50px", height="50px", radius = "1000px" }: MainContainerProps) {
  return (
    <MainContainer 
      width={width} 
      height={height} 
      radius = {radius}
    >
      <img src={source} alt="" />
    </MainContainer>
  );
}
