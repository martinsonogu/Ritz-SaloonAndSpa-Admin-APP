import React from 'react'

interface TitleProps {
  icon: any,
  title: string;
  number: string | number;
}

const Title: React.FC<TitleProps> = ({ icon, title, number }) => {
  return (
      <div className='flex items-start gap-4'>
          <div className='1'>
              <img src={icon} alt="" />
          </div>
          <div className='2'>
              <p className='font-normal text-[#ACACAC] text-xl'>{title}</p>
              <p className='font-semibold text-[#333333] text-2xl mt-0'>{number}</p>
          </div>
          
    </div>
  )
}

export default Title