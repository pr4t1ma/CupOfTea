import HamburgerMenu from "./HamburgerMenu";
const Header = () => {
  return (
    <div className="container w-full mx-auto my-20">
      <h1 className="text-3xl text-bold text-red-500">
        Hello here is the Header
      </h1>
      <HamburgerMenu />
    </div>
  );
};

export default Header;
