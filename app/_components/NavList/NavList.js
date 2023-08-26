import NavButton from "./NavButton/NavButton";

const navArray = [
  {
    iconURL: "/assets/icons/home.svg",
    label: "Home",
    navigatesTo: "/",
  },
];

export default function NavList() {
  const navLinks = navArray.map((nav) => (
    <NavButton
      key={`${nav.iconURL}-${nav.label}`}
      iconURL={nav.iconURL}
      text={nav.label}
      navigatesTo={nav.navigatesTo}
    />
  ));
  return <div>{navLinks}</div>;
}
