import React, { useRef, useState } from "react";
import styles from "./Sidebar.module.scss";
import { m } from "framer-motion";
import cn from "clsx";
import { useAtom } from "jotai";
import { isCollapsedAtom } from "../../store";
import Menu from "./Menu/Menu";
import Profile from "./Profile/Profile";
import Actions from "./Actions/Actions";
const Sidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useAtom(isCollapsedAtom);
  const hoverTimeoutRef = useRef<number | null>(null);

  const toggleSideBar = () => {
    if (isCollapsed) {
      setIsCanHover(false);
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
      hoverTimeoutRef.current = window.setTimeout(() => {
        setIsCanHover(true);
      }, 1000);
    }
    setIsCollapsed(!isCollapsed);
  };
  const [isCanHover, setIsCanHover] = useState(true);
  return (
    <m.aside
      className={cn(styles.sidebar, {
        [styles.collapsed]: isCollapsed,
        [styles.canHover]: isCanHover,
      })}
      animate={{ width: isCollapsed ? "4rem" : "16rem" }}
      transition={{ type: "spring", stiffness: 300, damping: 23 }}
    >
      <Actions isCollapsed={isCollapsed} toggleSideBar={toggleSideBar} />
      {!isCollapsed && <Profile />}
      <Menu />
    </m.aside>
  );
};

export default Sidebar;
