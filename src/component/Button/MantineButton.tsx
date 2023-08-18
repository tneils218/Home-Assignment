import React, { MouseEventHandler } from "react";

import { Button, ButtonProps } from "@mantine/core";

export const MantineButton: React.FC<
  ButtonProps & { onClick?: MouseEventHandler<HTMLButtonElement> }
> = ({ variant = "default", onClick, ...props }) => {
  return <Button onClick={onClick} variant={variant} {...props} />;
};
