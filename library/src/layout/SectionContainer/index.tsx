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
        className={clsx("wallavi-mainBox", { mobileMode: mobile })}
      >
        {(title || chipLabel) && (
          <styles.TitleBox className="wallavi-titleBox">
            {title && (
              <styles.TitleLabel className="wallavi-titleLabel" variant="h5">
                {title}
              </styles.TitleLabel>
            )}
            {chipLabel && (
              <styles.ChipLabel className="wallavi-chipLabel">
                {chipLabel}
              </styles.ChipLabel>
            )}
          </styles.TitleBox>
        )}
        <styles.BodyBox className="wallavi-bodyBox">
          {props.children}
        </styles.BodyBox>
      </styles.MainBox>
    </ThemeProvider>
  );
};

export default SectionContainer;
