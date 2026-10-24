export type MenuItem = { name: string; description?: string; price?: string };
export type MenuSection = { title: string; items: MenuItem[] };

/**
 * The restaurant menu shown on /restaurant#menu.
 * Add the current menu here exactly as the restaurant publishes it; while `sections` is empty the page shows an
 * invitation to view the menu and reserve instead of placeholder dishes.
 */
export const menu: { sections: MenuSection[]; currentMenuUrl: string } = {
  sections: [],
  currentMenuUrl: "https://barrelhouse-statia.com/",
};
