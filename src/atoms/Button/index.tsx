import Button from "@mui/material/Button";
import { styled } from '@mui/material/styles';

const FilterButton = styled(Button)(({ theme }) => ({
  borderRadius: 8,
  textTransform: "none",
  color: theme.palette.grey[800],
  cursor: "pointer",
  fontSize: 14,
  marginRight: 2,
  ':hover': {
    backgroundColor: theme.palette.grey[50]
  }
}));

export default FilterButton;
