import { Box, Typography, styled } from "@mui/material";
import { blue, grey, orange } from "@mui/material/colors";
import { SectionContainer } from "@wallavi/component-library";
import React from "react";

const MainBox = styled(Box)({
  padding: 30,
  display: "flex",
  flexDirection: "column",
  gap: 8,
  alignItems: "flex-start",
  backgroundColor: "#e4e4e4",
  ".wallavi-mainBox": {
    //border: "1px solid black",
  },
  ".wallavi-titleBox": {
    //border: "1px solid blue",
  },
  ".wallavi-bodyBox": {
    //border: "1px solid purple",
  },
});

export default function PreviewSectionContainer(props: any) {
  return (
    <MainBox>
      <SectionContainer {...props}>
        <Typography>Aqui el contenido de la seccion</Typography>
        <Box
          sx={{ width: "650px", height: "200px", backgroundColor: "burlywood" }}
        />
      </SectionContainer>
    </MainBox>
  );
}
