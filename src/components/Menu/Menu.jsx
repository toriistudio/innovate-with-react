import React from "react";

import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

const Menu = ({ open, items }) => {
  return (
    <div>
      <Button>Toggle</Button>
      {open && (
        <Paper style={{ maxWidth: 120 }}>
          <MenuList>
            {items.map((item) => (
              <MenuItem key={item}>{item}</MenuItem>
            ))}
          </MenuList>
        </Paper>
      )}
    </div>
  );
};

export default Menu;
