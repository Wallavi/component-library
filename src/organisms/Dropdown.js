import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Input from "../atoms/Input";
import List from "./List";

import testingImage from "../assets/testingImage.png";

const MainContainer = styled.div`
  position: relative;
`;

const AbsoluteContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 70px;
  left: 0px;
  z-index: 2;
`;

export default function Dropdown(props) {
  const [focused, setFocusedState] = useState(false);

  return (
    <MainContainer>
      <Input
        label={props.label}
        onFocus={() => setFocusedState(true)}
        onBlur={() => setFocusedState(false)}
      ></Input>
      {focused && (
        <AbsoluteContainer>
          <List
            listItems={[
              {
                source: testingImage,
                mainData: "Main Data",
                secondaryData: "Secondary Data",
              },
              {
                source: testingImage,
                mainData: "Main Data",
                secondaryData: "Secondary Data",
              },
              {
                source: testingImage,
                mainData: "Main Data",
                secondaryData: "Secondary Data",
              },
              {
                source: testingImage,
                mainData: "Main Data",
                secondaryData: "Secondary Data",
              },
              {
                source: testingImage,
                mainData: "Main Data",
                secondaryData: "Secondary Data",
              },
            ]}
          ></List>
        </AbsoluteContainer>
      )}
    </MainContainer>
  );
}

Dropdown.propTypes = {
  label: PropTypes.string,
};
