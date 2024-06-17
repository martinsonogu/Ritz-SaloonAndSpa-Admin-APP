import React from 'react'
import SiteIcon from "../../../../assets/svg/site.svg"
import EarnIcon from "../../../../assets/svg/earning_icon.svg"
import BookingIcon from "../../../../assets/svg/booking_icon.svg"
import T from "../../../../components/OverviewTitle"
import Barchart from "./Barchart"

const Overview = () => {
  return (
      <div>
        <div className="w-full h-[123px] flex items-center justify-between bg-white px-12 rounded-bg">
        {Items.map((item, index) => 
            <T key={index} icon={item.icon} title={item.title} number={item.amount} />
        )}
        </div>
        {/* the graph */}
          <div className='w-full flex items-center justify-center'>
            <div className='left bg-white px-4 mt-3 rounded-bg w-[70%] mr-2'>
                <p className="text-[#4B0C67] font-semibold text-2xl pt-4 pb-10">Total Revenue</p>
                <div className="w-full">
                <Barchart />
                </div>      
            </div>
            <div className='right  bg-white px-4 mt-3 w-[30%]'>
               Hello
            </div>
          </div>
          {/* Payment Transaction */}
            <div className='w-full flex items-center justify-center'>
                <div className='left bg-white px-4 mt-3 rounded-bg w-[70%] mr-2'>
                    <p className="text-[#4B0C67] font-semibold text-2xl pt-4 pb-10">Payment Transaction</p>
                    <div className="w-full">
                    </div>      
                </div>
                <div className='right bg-white px-4 mt-3  w-[30%]'>
                    Hello
                </div>
          </div>
    </div>
  )
}


export const Items = [
  {
    icon: SiteIcon,
    title: 'Site Visit',
    amount: 12,
  },
  {
    icon: BookingIcon,
    title: 'Total Bookings',
    amount: 1600,
  },
  {
    icon: SiteIcon,
    title: 'Total Customers',
    amount: 200,
  },
  {
    icon: EarnIcon,
    title: 'Total Earnings',
    amount: 200,
  },

]
export default Overview