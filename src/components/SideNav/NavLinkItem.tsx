import React, { PropsWithChildren, useRef } from 'react';
import clsx from 'clsx';
import { NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { useHover } from 'usehooks-ts';
import { cn } from '../../utils/index';

export interface NavLinkItemPropsType {
  text: string;
  path: string;
  tag?: JSX.Element;
  icon?: JSX.Element;
  className?: string;
  isDropdown?: boolean;
  dropdownItems?: Array<string>;
  renderChildren?: (...args: any) => React.ReactNode | React.ReactNode[];
}

export const NavLinkItem: React.FC<NavLinkItemPropsType> = (props) => {
  const { icon, path, text, className } = props;

  return (
    <NavLink
      className={({ isActive }) =>
        cn(
          clsx(
            'flex items-center p-[10px] text-[#4B0C67] bg-[#F8F8F8] text-[18px] font-[700] rounded-[10px]',
            isActive &&
              'text-[#F8F8F8] [&_path]:stroke-[#6231F4] [&_rect]:stroke-[#6231F4] bg-[#4B0C67] rounded-[10px] ',
            className
          )
        )
      }
      to={path}
      target={text === 'API Documentation' ? '_blank' : '_self'}
    >
      <div className='flex text-[13px] items-center gap-[13px] tracking-wider'>
        {icon}
        {text}
      </div>
    </NavLink>
  );
};

export const NavDropdownItem: React.FC<PropsWithChildren<NavLinkItemPropsType>> = ({
  icon,
  text,
  path,
  children
}) => {
  const hoverRef = useRef(null);
  const isHover = useHover(hoverRef);
  const { pathname } = useLocation();

  return (
    <div className={clsx('relative')}>
      <div
        ref={hoverRef}
        className={clsx(
          'flex cursor-pointer items-center p-[10px] text-[13px] font-medium',
          (isHover || path === pathname) && 'bg-[#4B0C67] text-white rounded-[10px]'
        )}
      >
        <div className='flex flex-row relative text-[12px] items-center gap-[13px]'>
          {icon}
          {text}
          <FontAwesomeIcon
            className={clsx(
              'absolute top-[8px] right-[-20px] transition',
              isHover && 'transform rotate-180'
            )}
            icon={faAngleDown}
          />
        </div>
      </div>
      {isHover && (
        <div className='w-full absolute mt-4 flex flex-col justify-center pb-3 pt-1 rounded-[10px] gap-[20px] px-9 items-start'>
          {children}
        </div>
      )}
    </div>
  );
};

