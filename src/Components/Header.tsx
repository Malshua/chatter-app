import Navbar from "./NavBar";
import Button from "./Button";

const Header = function () {
  return (
    <div>
      <Navbar />
      <div
        className="flex h-[500px] items-center justify-center bg-black/60
bg-hero-bg2 bg-cover bg-top bg-no-repeat bg-blend-multiply lg:h-hero"
      >
        <div className="flex  translate-y-7 flex-col items-start justify-center gap-y-3 p-4 text-white">
          <h2 className="text-2xl font-bold ">
            <span className="block text-[50px] leading-[50px] text-slate-200 md:text-[70px]">
              Welcome to Bloggy
            </span>
            <br /> A Haven for Text-based Content.
          </h2>
          <p>
            Unleash the power of words, connect with like minded Readers and
            Writers
          </p>
          <Button bgcolor="blue">Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
