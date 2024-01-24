import React from "react";
import styles from "./styles";
import { BoxProps, ThemeProvider } from "@mui/material";
import { useThemeContext } from "theme/wrapper";
import clsx from "clsx";

interface SectionContainerProps extends BoxProps {
  title: string;
  chipLabel?: string;
  mobile?: boolean;
}

const SectionContainer = ({
  title,
  chipLabel,
  mobile,
  ...props
}: SectionContainerProps) => {
  const { theme } = useThemeContext();
  return (
    <ThemeProvider theme={theme}>
      <styles.MainBox
        {...props}
        className={clsx("mainBox", { mobileMode: mobile })}
      >
        {(title || chipLabel) && (
          <styles.TitleBox className="titleBox">
            {title && (
              <styles.TitleLabel className="titleLabel" variant="h5">
                {title}
              </styles.TitleLabel>
            )}
            {chipLabel && (
              <styles.ChipLabel className="chipLabel">
                {chipLabel}
              </styles.ChipLabel>
            )}
          </styles.TitleBox>
        )}
        <styles.BodyBox className="bodyBox">{props.children}</styles.BodyBox>
      </styles.MainBox>
    </ThemeProvider>
  );
};

export default SectionContainer;
