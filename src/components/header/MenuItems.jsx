import React from "react";

const MenuItems = ({ opened, items }) => {
  return (
    <div className="flex flex-col text-md">
      {!opened && (
        <div className="absolute right-0 top-8 min-w-[275px] rounded-xl shadow-md shadow-black z-10 bg-bodyBg">
          {items.map((item) => (
            <div
              key={item}
              className="text-start transition-all hover:bg-AccentBlue first:rounded-t-xl last:rounded-b-xl last:hover:bg-ButtonColor"
            >
              <p className="px-4 py-4">{item}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuItems;
