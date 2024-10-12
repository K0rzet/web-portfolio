import React from "react";
import { MENU } from "./menu.data";
import MenuItem from "./MenuItem";
import styles from "../Sidebar.module.scss";
const Menu: React.FC = () => {
  return (
    <nav className={styles.menu}>
      {MENU.map((item) => (
        <MenuItem item={item} key={item.name} />
      ))}
    </nav>
  );
};

export default Menu;
