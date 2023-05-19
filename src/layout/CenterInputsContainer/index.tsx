import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const CenterInputsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(1),
}));

export default CenterInputsContainer;
