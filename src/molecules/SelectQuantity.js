import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors } from "../colorPalette";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import Input from "../atoms/Input";

const MainContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ArticleName = styled.p`
  width: 45%;
  overflow-x: scroll;
  flex-shrink: 0;
`;

const TrashContainer = styled.div`
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.colors.secondaryMiddleBlue};
  border-radius: 100px;
  flex-shrink: 0;
  margin-left: 10px;
  :hover {
    background: ${(props) => props.colors.primaryDarkBlue};
  }
`;

const TrashIcon = styled(FontAwesomeIcon)`
  color: white;
  font-size: 17px;
`;

export default function SelectQuantity(props) {
  return (
    <MainContainer>
      <ArticleName>{props.label}</ArticleName>
      <Input
        label={`Cantidad en ${props.unitMeasure}`}
        value={props.qty}
        required={true}
        handleChange={props.handleChange}
      ></Input>
      <TrashContainer onClick={() => props.onClick(props)} colors={colors}>
        <TrashIcon icon={faTrash} />
      </TrashContainer>
    </MainContainer>
  );
}

SelectQuantity.propTypes = {
  label: PropTypes.string.isRequired,
  unitMeasure: PropTypes.string.isRequired,
  qty: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};
