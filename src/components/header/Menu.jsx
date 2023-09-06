import { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { VscChromeClose } from "react-icons/vsc";
import MenuItems from "./MenuItems";

const Menu = ({ items }) => {
  const [opened, setOpened] = useState(false);

  const handleOpenedMenu = () => {
    setOpened(!opened);
    console.log(opened);
  };

  return (
    <>
      <div onClick={handleOpenedMenu} className="cursor-pointer">
        {opened ? (
          <CgMenuRight className="text-2xl" />
        ) : (
          <VscChromeClose className="text-2xl" />
        )}
        <MenuItems opened={opened} items={items} />
      </div>
    </>
  );
};

export default Menu;
