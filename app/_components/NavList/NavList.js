import NavButton from "./NavButton/NavButton";

const navArray = [
  {
    iconURL: "/assets/icons/home.svg",
    label: "Home",
    navigatesTo: "/dashboard",
  },
  {
    iconURL: "/assets/icons/bookmark.svg",
    label: "Course",
    navigatesTo: "/course",
  },
  {
    iconURL: "/assets/icons/graduation-cap.svg",
    label: "Students",
    navigatesTo: "/students",
  },
  {
    iconURL: "/assets/icons/usd-square.svg",
    label: "Payment",
    navigatesTo: "/payment",
  },
  {
    iconURL: "/assets/icons/report.svg",
    label: "Report",
    navigatesTo: "/report",
  },
  {
    iconURL: "/assets/icons/slider.svg",
    label: "Settings",
    navigatesTo: "/settings",
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
  return (
    <div
      className={`px-10 w-full h-full flex flex-col gap-10 lg:gap-20 justify-between `}
    >
      <div className="w-full h-full flex flex-col gap-5">{navLinks}</div>
      <NavButton
        iconURL="/assets/icons/logout.svg"
        text="Logout"
        navigatesTo="/"
        iconPosition="right"
      />
    </div>
  );
}
