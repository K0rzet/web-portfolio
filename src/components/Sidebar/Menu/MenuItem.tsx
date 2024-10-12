import React from "react";
import { IMenuItem } from "./menu.data";
import { useAtomValue } from "jotai";
import { isCollapsedAtom } from "../../../store";
import { Link } from "react-router-dom";
const MenuItem: React.FC<{ item: IMenuItem }> = ({ item }) => {
  const isCollapsed = useAtomValue(isCollapsedAtom);
  return (
    <Link to={item.link}>
      <item.icon />
      {!isCollapsed && item.name}
    </Link>
  );
};

export default MenuItem;
