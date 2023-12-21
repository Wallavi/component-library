import * as React from "react";
import styles from "./styles";

interface SwitchProps {
  selected: boolean;
  disabled?: boolean;
  handleSelected: (
    event: React.ChangeEvent<HTMLInputElement>,
    isSelected: boolean
  ) => void;
}

export default function Switch(props: SwitchProps) {
  return (
    <styles.SwitchMUI
      checked={props.selected}
      disabled={props.disabled}
      onChange={props.handleSelected}
    />
  );
}
