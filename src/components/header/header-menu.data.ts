export interface IHeaderMenuData {
  label: string;
  href: string;
}
export const HEADER_MENU_DATA: IHeaderMenuData[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Flights",
    href: "/flights",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contacts",
    href: "/contacts",
  },
];
