import React, { ReactNode } from "react";
import { styled, Theme } from "@mui/material";
import { iconColor } from "./utils";
import { ArrowForwardRounded } from "@mui/icons-material";

interface ContainerProps {
  theme: Theme;
  percentvalue?: number;
  icontheme?: string;
}

const StyledContainer = styled("div")(
  ({ theme, percentvalue = 0, icontheme = "gray" }: ContainerProps) => ({
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.primary.contrastText,
    width: "fit-content",
    padding: 12,
    borderRadius: 15,
    boxShadow: "0px 3px 15px 0px rgba(0, 0, 0, 0.15)",
    boxSizing: "border-box",

    ".button-container": {
      display: "flex",
      justifyContent: "flex-end",

      button: {
        backgroundColor: "transparent",
        border: "none",
        width: "fit-content",
        display: "flex",
        alignItems: "center",

        svg: {
          fontSize: "20px",
          marginLeft: "10px",
        },
      },
    },

    "&.circular": {
      ".main-container": {
        display: "flex;",
        alignItems: "center",

        ".data-names": {
          height: 200,
          width: 300,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          ".data-name": { display: "flex", justifyContent: "space-between" },
        },

        ".graph-container + *": {
          marginLeft: 32,
        },
      },
    },
    "&.pie": {
      padding: theme.spacing(3, 2),
      width: 380,

      ".main-container": {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",

        ".data-names": {
          display: "flex",
          width: 280,
          height: 75,
          backgroundColor: theme.palette.primary.contrastText,
          borderRadius: 15,
          padding: "17px",

          ".data-name": {
            width: "50%",
            flex: "1 1 50%",

            ".name": {
              color: theme.palette.info.light,
              ...theme.typography.body2,
              textAlign: "center",
            },

            ".percent": {
              color: theme.palette.primary.light,
              ...theme.typography.h5,
              textAlign: "center",
            },
          },
        },

        ".graph-container + *": {},
      },
    },

    "&.card": {
      display: "block",
      color: "#212159",
      minWidth: 270,
      position: "relative",

      h3: {
        fontSize: "25px",
      },

      h4: {
        fontSize: "16px",
      },

      ".percent-container": {
        display: "flex",
        fontSize: "16px",

        ".percent": {
          padding: "2px 5px",
          backgroundColor:
            percentvalue > 0
              ? theme.palette.success.main
              : theme.palette.error.main,
          color:
            percentvalue > 0
              ? theme.palette.primary.contrastText
              : theme.palette.common.white,
          borderRadius: 8,

          "& + *": {
            marginLeft: "12px",
          },
        },
      },

      ".icon-container": {
        position: "absolute",
        margin: 0,
        top: 12,
        right: 12,
        width: 60,
        height: 60,
        borderRadius: 20,
        backgroundColor: iconColor[icontheme].background,

        span: {
          display: "flex",
          alignItems: "center",
          width: "100%",
          height: "100%",

          svg: {
            fontSize: 38,
            margin: "auto",
            color: iconColor[icontheme].font,
          },
        },
      },

      "> * + *": {
        marginTop: 12,
      },
    },

    "&.best-sellers": {
      h3: { fontSize: "20px", "& + *": { marginTop: "14px" } },
      padding: "24px 8px",
      width: "350px",
      color: "#212159",

      ".headers, .seller-container": {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        flex: "1 1",
        p: {
          textAlign: "center",
          "&.place": { minWidth: "50px", textAlign: "left" },
          "&.goal": { minWidth: "150px" },
        },
        "& + *": { marginTop: "36px" },
      },
      ".seller-container": { p: { "&.name, &.sells": { fontSize: "10px" } } },

      "&.extended": {
        padding: "24px",
        minWidth: "800px",

        ".sellers-container": { p: { fontSize: "16px" } },
      },
    },

    "&.cities": {
      color: "#414D55",
      padding: "20px 12px",

      h3: {
        fontSize: 16,
        "& + *": {
          marginTop: "28px",
        },
      },

      ".city-container": {
        width: 330,
        height: 80,
        position: "relative",
        borderRadius: 16,
        boxShadow: "0px 1px 8px 0px rgba(110, 110, 110, 0.10)",
        padding: 15,
        overflow: "hidden",

        p: { fontSize: "14px", "&.value": { fontSize: "20px" } },

        img: {
          border: "none",
          width: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
          objectFit: "cover",
        },

        "& + *": { marginTop: "28px" },
      },
    },
  })
);

interface ContainerProps {
  children: ReactNode;
  theme: Theme;
  className?: string;
  icontheme?: string;
  percentvalue?: number;
  onclick?: () => void;
}

export const Container = ({
  theme,
  className = "",
  icontheme = "green",
  percentvalue = 0,
  onclick,
  children,
}: ContainerProps) => {
  return (
    <StyledContainer
      theme={theme}
      className={className}
      icontheme={icontheme}
      percentvalue={percentvalue}
    >
      {children}
      {onclick && (
        <div className="button-container">
          <button onClick={onclick}>
            Ver más
            <ArrowForwardRounded />
          </button>
        </div>
      )}
    </StyledContainer>
  );
};
