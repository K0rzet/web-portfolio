import React from "react";
import { PanelLeftOpen, PanelLeftClose } from "lucide-react";
import styles from "./Actions.module.scss";
import cn from "classnames";
const Actions: React.FC<{
  isCollapsed: boolean;
  toggleSideBar: () => void;
}> = ({ isCollapsed, toggleSideBar }) => {
  return (
    <div className={styles.actions}>
      <button
        className={cn(styles.toggle, {
          [styles.collapsed]: isCollapsed,
        })}
        onClick={toggleSideBar}
      >
        {isCollapsed ? <PanelLeftOpen /> : <PanelLeftClose />}
      </button>
    </div>
  );
};

export default Actions;
