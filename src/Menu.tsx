import { FC } from "react";
type NavItem = {
  label: string;
  href: string;
};

type MenuProps = {
  items: NavItem[];
};

const Menu: FC<MenuProps> = ({ items }) => {
  return (
    <ul className="flex gap-20 my-20">
      {items.map((item) => {
        return (
          <li className="">
            <a href="" key={item.href} className="">
              {item.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Menu;
