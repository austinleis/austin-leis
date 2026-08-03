export type NavItem = {
  label: string;
  href: string;
  missing?: boolean;
};

export const menu: NavItem[] = [
  { label: "Work", href: "/work" },
  { label: "Info", href: "/info" },
  { label: "Contact", href: "/contact", missing: true },
];

export const instagram = {
  label: "Instagram",
  href: "https://www.instagram.com/",
};
