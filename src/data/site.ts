export const siteConfig = {
  name: "GT Spaces",
  shortName: "GT",
  tagline: "We Make Your Dreams True.",
  description:
    "GT Spaces is a real estate consultancy in Faridabad helping buyers and investors find verified residential and commercial opportunities across the NCR, including landmark developments like Skynest Towers in Sector 80.",
  url: "https://www.gtspaces.in",
  phone: "9716164443",
  phoneFormatted: "+91 97161 64443",
  whatsappLink: "https://wa.me/919716164443",
  email: "gtspaces18@gmail.com",
  address: {
    line: "Shop 10, Near SRS International School, Neharpar, Faridabad, Haryana 122002",
    locality: "Faridabad",
    region: "Haryana, India",
  },
  logo: "/images/logo/logo.png",
};

export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skynest Towers", href: "/projects/skynest-towers" },
];
