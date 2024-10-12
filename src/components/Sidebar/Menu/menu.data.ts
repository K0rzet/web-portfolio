import { CodeXml, IdCard, LucideIcon, NotebookText } from "lucide-react";

export interface IMenuItem {
  name: string;
  link: string;
  icon: LucideIcon;
}

export const MENU: IMenuItem[] = [
  {
    icon: IdCard,
    name: "О себе",
    link: "/",
  },
  {
    icon: NotebookText,
    name: "Контакты",
    link: "/contacts",
  },
  {
    icon: CodeXml,
    name: "Портфолио",
    link: "/portfolio",
  },
];
