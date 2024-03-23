import React, { PropsWithChildren, useRef } from 'react';
import clsx from 'clsx';
import {useLocation } from 'react-router-dom';
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
    isAdminOrSupport?: boolean;
    isDropdown?: boolean;
    dropdownItems?: Array<string>;
    renderChildren?: (...args: any) => React.ReactNode | React.ReactNode[];
  }

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
      <div
        ref={hoverRef}
        className={clsx(
          (isHover || path === pathname) &&
            'rounded-[10px] bg-[#EEF2FF]'
        )}
      >
        <div
          className={cn(clsx('flex cursor-pointer items-center p-[10px] text-[13px] font-medium'))}
        >
          <div className='flex relative text-[12px] items-center gap-[13px] tracking-wider'>
            {icon}
            {text}
            <FontAwesomeIcon
              className={clsx(
                ' absolute top-[4px] right-[-20px] transition ',
                isHover && ' transform rotate-180'
              )}
              icon={faAngleDown}
            />
          </div>
        </div>
        {isHover && (
          <div className='w-full flex flex-col justify-center pb-3 pt-1 rounded-[10px] gap-2 px-9 items-start bg-[#EEF2FF]'>
            {children}
          </div>
        )}
      </div>
    );
  };