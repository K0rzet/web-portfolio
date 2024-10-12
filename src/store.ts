import { atom } from "jotai";

const localStorageKey = "isCollapsed";

export const isCollapsedAtom = atom(
  typeof window !== "undefined"
    ? JSON.parse(localStorage.getItem(localStorageKey) || "false")
    : false,

  (_get, set, newValue: boolean) => {
    set(isCollapsedAtom, newValue);
    localStorage.setItem(localStorageKey, JSON.stringify(newValue));
  }
);
