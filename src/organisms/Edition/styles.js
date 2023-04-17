import styled from "styled-components";
import { colors } from "../../colorPalette";

export const MainContainer = styled.div`
  top: 50%;
  left: 50%;
  width: 450px;
  display: flex;
  position: fixed;
  background: white;
  padding: 30px 20px;
  border-radius: 10px;
  flex-direction: column;
  align-items: flex-start;
  transform: translate(-50%, -50%);
`;

export const Title = styled.p`
  font-size: 15px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 20px 0px;
  width: 100%;
  color: ${colors.primaryDarkBlue};
`;
