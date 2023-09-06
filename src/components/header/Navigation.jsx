import React from "react";

const Navigation = ({ items }) => {
  return (
    <nav className="flex gap-14">
      {items.map((item) => (
        <ul key={item} className="pb-2 cursor-pointer relative group list-none">
          <li className="relative ">
            {item}
            {/* Animation to slide the line from left to right */}
            <div className="absolute left-0 w-full h-[2px] bg-AccentBlue transform scale-x-0 origin-left transition-transform group-hover:scale-x-100 "></div>
          </li>
        </ul>
      ))}
    </nav>
  );
};

export default Navigation;
