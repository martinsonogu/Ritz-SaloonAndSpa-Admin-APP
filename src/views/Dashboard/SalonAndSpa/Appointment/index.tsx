import React from 'react'
import FilterIcon from "../../../../assets/svg/filter-icon.svg"
import ResetIcon from "../../../../assets/svg/reset-icon.svg"
import { WhiteBGContainer } from "../components/WhiteBg"
import { Paginator } from '../../../../components/Paginator'

const Appointment= () => {
  return (
    <div className='mt-5 ml-5'>
      <h3 className='text-[#4B0C67] text-2xl font-semibold leading-6 mb-[20px]'>
          Appointment Lists
      </h3>
      <div className='bg-[#F9F9FB] rounded-lg w-[70%]'>
        <div className='p-6 flex items-center justify-between'>
          <img src={FilterIcon} alt="" />
          <p className='text-xs font-bold text-[#202224]'>Filter By</p>
          <p className='text-xs font-bold text-[#202224]'>14 Feb 2019</p>
          <p className='text-xs font-bold text-[#202224]'>Order Type</p>
          <p className='text-xs font-bold text-[#202224]'>Booking Status</p>
          <div className='flex items-center justify-center'>
            <img src={ResetIcon} alt="" className='mr-4' />
            <p className='text-xs font-semibold text-[#EA0234]'>Reset Filter</p>
          </div>
        </div>
        
      </div>
      <WhiteBGContainer className='mt-5'>
          Hello
      </WhiteBGContainer>
      
    </div>
  )
}
export default Appointment
