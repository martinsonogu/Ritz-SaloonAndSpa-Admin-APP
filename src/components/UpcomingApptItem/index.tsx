import React from 'react'
import t from "../../assets/img/icon.png"

interface UpcomingApptItemProps {
  imgSrc: string;
  name: string;
  service: string;
  time: string;
  price: number;
}

const UpcomingApptItem: React.FC<UpcomingApptItemProps> = ({ imgSrc, name, service, time, price }) => {
  return (
    <div className='bg-[#EDF0F5] w-full rounded-lg mb-[21px]'>
        <div className='w-full flex'>
              <img src={imgSrc} alt="" className='mr-2' />
              <div className='w-full flex items-center justify-between'>
                  <div>
                      <p className='text-[#161736] font-semibold text-sm'>{ name}</p>
                      <p className='font-normal text-[#7D8DA6] text-xs'>{service}</p>
                      <p className='font-normal text-[#7D8DA6] text-xs'>{time}</p>
                  </div>
                  <p className='font-medium text-[#161736] text-sm'>{price}</p>
              </div>
        </div> 
    </div>
  )
}

export default UpcomingApptItem

let items = [
    {
        imgSrc: '../../assets/img/icon.png',
        name: "John Doe",
        service: "Haircut",
        time: 
    }
]