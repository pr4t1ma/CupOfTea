import { useState } from "react";
import Menu from "./Menu";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="">
      {isOpen ? (
        <div className="">
          <Menu
            items={[
              { label: "Home", href: "./" },
              { label: "Service", href: "/service" },
              { label: "Contact", href: "/contact" },
            ]}
          />
          <button onClick={() => setIsOpen(false)}>Closed</button>
        </div>
      ) : (
        <button onClick={() => setIsOpen(true)}>Open</button>
      )}
    </div>
  );
};

export default HamburgerMenu;
