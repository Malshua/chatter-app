import Feed from "./Feed";
import SideNav from "../layouts/SideNav";
import HeaderNav from "../layouts/HeaderNav";

const MainLayout = () => {
  return (
    <>
      {/* Side bar */}
      <SideNav />

      <section className="md:ml-64">
        {/* Header/Nav */}
        <HeaderNav />
        <article className="md:pr-15 py-5 pl-3 pr-3 md:mt-16">
          <Feed />
        </article>
      </section>
    </>
  );
};

export default MainLayout;
