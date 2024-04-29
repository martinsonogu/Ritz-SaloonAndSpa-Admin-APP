import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  DownArrowIcon,
  IndicatorIcon,
  IndicatorIcon2,
  UpArrowIcon,
} from "./constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

interface DropdownItem {
  id: number;
  text: string;
  link: string;
}

interface DropdownProps {
  icon: JSX.Element;
  title: string;
  items: DropdownItem[];
  initiallyActive?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({
  icon: Icon,
  title,
  items,
  initiallyActive = false,
}) => {
  const [isActive, setIsActive] = useState<boolean>(initiallyActive);

  return (
    <div className=" w-full">
      <div
        onClick={() => setIsActive(!isActive)}
        className={`w-full p-3 flex items-center justify-between rounded-md ${
          isActive ? "bg-[#4B0C67]" : "bg-[#F8F8F8]"
        }`}
      >
        <div className=" flex items-center">
          {Icon}
          <h2
            className={`ml-2 ${
              isActive ? "text-[#F8F8F8]" : "text-[#4B0C67]"
            } font-bold text-lg`}
          >
            {title}
          </h2>
        </div>

        <FontAwesomeIcon
          icon={isActive ? faChevronUp : faChevronDown}
          color={isActive ? "#F8F8F8" : "#4B0C67"}
        />
      </div>

      {isActive && (
        <div className="w-full h-1/2 mt-5 flex items-center">
          {items.length === 3 ? <IndicatorIcon /> : <IndicatorIcon2 />}
          <div className="w-full flex flex-col items-center justify-between gap-3  ">
            {items.map((item) => (
              <NavLink
                to={item.link}
                target="_self"
                className="w-full h-full py-3 pl-8 flex flex-col items-start justify-center  text-base text-[#4B0C67] font-medium rounded-[10px] border-solid border-b border-[#E4E4E7] bg-[#F8F8F8] shadow-lg"
                //className=" bg-red-600 flex flex-col my-5 pl-[20px] py-[10px] shadow-[0px_1px_0px_0px_rgba(18_32_59_0.09)] border-solid border-b border-[#E4E4E7] text-[#4B0C67] bg-[#F8F8F8] text-[16px] font-medium rounded-[10px] "
                key={item.id}
              >
                {item.text}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
