import React, { PropsWithChildren } from 'react'
import clsx from 'clsx';
import { cn } from '../../../../utils'

export const WhiteBGContainer: React.FC<PropsWithChildren & { className?: string }> = ({
  children,
  className
}) => {
  return (
    <div
      className={cn(
        clsx('rounded-[10px] bg-white border-solid border-[#E4E4E7] border-[1px] py-5', className)
      )}
    >
      {children}
    </div>
  );
};