import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
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
  background: black;
  border-radius: 100px;
  flex-shrink: 0;
  margin-left: 10px;
`;

const TrashIcon = styled(FontAwesomeIcon)`
  color: white;
  font-size: 17px;
`;

export default function SelectArticleQuantity(props) {
  return (
    <MainContainer>
      <ArticleName>{props.articleName}</ArticleName>
      <Input
        label={`Cantidad en ${props.unitMeasure}`}
        value={props.qty}
        required={true}
      ></Input>
      <TrashContainer>
        <TrashIcon icon={faTrash} onClick={props.onClick} />
      </TrashContainer>
    </MainContainer>
  );
}

SelectArticleQuantity.propTypes = {
  articleName: PropTypes.string.isRequired,
  unitMeasure: PropTypes.string.isRequired,
  qty: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
