import React from "react";
import styled from "styled-components";
import { colors } from "../colorPalette";
import PropTypes from "prop-types";

import Avatar from "../atoms/Avatar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbtack } from "@fortawesome/free-solid-svg-icons";

const MainContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 160px;
  border-radius: 10px;
  border: ${(props) => `1px solid ${props.colors.secondaryMiddleBlue}`};
  padding: 32px 18px;
  margin: 20px 0px;
  box-sizing: border-box;
  cursor: pointer;
`;

const LocationContainer = styled.div`
  margin-left: 15px;
  p {
    padding: 5px 0;
  }
`;

const MainData = styled.p`
  font-weight: 500;
`;

const Pin = styled(FontAwesomeIcon)`
  color: ${(props) => props.colors.primaryBlue};
  font-size: 24px;
  position: absolute;
  top: 20px;
  right: 30px;
  transform: rotate(30deg);
`;

export default function SelectLocation(props) {
  return (
    <MainContainer colors={colors} onClick={props.handleChange}>
      <Avatar source={props.source} width="90px" height="90px"></Avatar>
      <LocationContainer>
        <MainData>{props.name}</MainData>
        <p>{props.address}</p>
      </LocationContainer>
      {props.selected && <Pin icon={faThumbtack} colors={colors} />}
    </MainContainer>
  );
}

SelectLocation.propTypes = {
  source: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  id: PropTypes.number.isRequired,
  handleChange: PropTypes.func,
};

SelectLocation.defaultProps = {
  selected: true,
};
