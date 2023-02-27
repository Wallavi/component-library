import { useState } from "react";

export const useActive = () => {
  const [value, setValue] = useState(false);

  const off = () => {
    setValue(false);
  };

  const on = () => {
    setValue(true);
  };
  return { value, off, on };
};
