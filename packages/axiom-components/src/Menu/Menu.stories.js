import React from "react";
import Menu from "./Menu";
import MenuItem from "./MenuItem";

export default {
  title: "Components/Menu",
  component: Menu,
};

export function Default() {
  return (
    <Menu>
      <MenuItem active>Menu item</MenuItem>
      <MenuItem>Menu item</MenuItem>
      <MenuItem>Menu item</MenuItem>
    </Menu>
  );
}
