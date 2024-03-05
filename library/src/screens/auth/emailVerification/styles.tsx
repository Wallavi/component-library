import { Box, styled } from "@mui/material";

export const CodeVerificatorContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  padding: 5px;

  ${({ theme }) => theme.breakpoints.up("xs")} {
    .MuiTextField-root {
      .MuiOutlinedInput-root {
        width: 50px;
        height: 90px;

        input {
          text-align: center;
          font-size: 40px;
        }
      }
    }
  }
  ${({ theme }) => theme.breakpoints.up("sm")} {
    .MuiTextField-root {
      .MuiOutlinedInput-root {
        width: 80px;
        height: 122px;

        input {
          text-align: center;
          font-size: 70px;
        }
      }
    }
  }
`;
