import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { DownArrowIcon, UpArrowIcon } from './constants'; 

interface DropdownItem {
  id: number;
  text: string;
  link: string;
}

interface DropdownProps {
  icon: JSX.Element;
  title: string;
  items: DropdownItem[];
}

const Dropdown: React.FC<DropdownProps> = ({ icon: Icon, title, items }) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <div className='' >
      <div className="flex flex-row items-center p-[10px] text-[#4B0C67] bg-[#4B0C67] text-[18px] font-bold rounded-[10px]" onClick={() => setIsActive(!isActive)}>
        {Icon }
        <div className='ml-2 flex flex-row items-center'>
            <span className='mr-5'>{title}</span>
            {isActive ? <UpArrowIcon /> : <DownArrowIcon />}
        </div>
       
      </div>
      {isActive && (
        <div className="">
          {items.map(item => (
            
            <NavLink 
            to={item.link}
            target='_self'
             className=" flex flex-col my-5 pl-[20px] py-[10px] shadow-[0px_1px_0px_0px_rgba(18_32_59_0.09)] border-solid border-b border-[#E4E4E7] text-[#4B0C67] bg-[#F8F8F8] text-[16px] font-medium rounded-[10px] " 
             key={item.id}
             >
              {item.text}
            </NavLink>
            
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
