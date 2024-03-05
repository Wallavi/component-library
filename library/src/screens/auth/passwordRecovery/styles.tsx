import { Box, styled } from "@mui/material";

export const ButtonsContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  button: {
    font-size: 15px;
  }

  ${({ theme }) => theme.breakpoints.up("xs")} {
    .send-code-button {
      & + * {
        margin-left: 10px;
      }
    }

    .cancel-button {
      max-width: 140px;
    }
  }

  ${({ theme }) => theme.breakpoints.up("sm")} {
    .send-code-button {
      flex: 1;
    }

    .cancel-button {
      max-width: none;
      flex: 1;
    }
  }
`;
