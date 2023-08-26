import Avatar from "../_components/Avatar/Avatar";
import Brand from "../_components/Brand/Brand";
import NavList from "../_components/NavList/NavList";

export default function SidebarLayout({ children }) {
  return (
    <main className="flex flex-row">
      <section className="flex flex-col w-full max-w-[270px] h-screen items-center pt-5 bg-cc-pink-300 ">
        <Brand variant="dashboard" />
        <div className="mt-14 mb-20 flex flex-col items-center">
          <Avatar imageURL="/avatar.png" />
          <span className="cc-text-17-bold mt-5">John Doe</span>
          <span className=" font-montserrat text-sm text-cc-orange-200 font-medium mt-2.5">
            Admin
          </span>
        </div>
        <NavList />
      </section>
      <section>{children}</section>
    </main>
  );
}
