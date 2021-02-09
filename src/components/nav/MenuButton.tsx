import React, { memo } from "react";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuButton: React.FC<Props> = ({ open, setOpen }): JSX.Element => (
  <div className={`toggleBtn center ${open && "a"}`}>
    <input type="checkbox" checked={open} onChange={() => setOpen(!open)} />
    <span />
  </div>
);

export default memo(MenuButton);
