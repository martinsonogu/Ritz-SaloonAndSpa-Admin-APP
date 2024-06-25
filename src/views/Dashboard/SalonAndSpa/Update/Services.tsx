import React from 'react'
import ServiceImg from '../../../../assets/img/Link.png'
import EditIcon from '../../../../assets/svg/edit-icon.svg'
import DeleteIcon from '../../../../assets/svg/delete-icon.svg'

const Services = () => {
  return (
    <div className=' border-b-2 border-b-[#D5D5D5] p-6'>
        <div className='inner-Container flex items-center justify-between'>
            <div className='imgTitle flex items-center w-[59%]'>
                <img src={ServiceImg} alt="" className='w-[213px] h-[141px] object-contain mr-6' /> 
                <h3 className='font-bold text-sm text-[#202224]'>Facials Treatment</h3>  
            </div>
            <div className='buttton w-[40%] flex items-center justify-between'>
                <button className='h-[40px] w-[125px] bg-[#E2EAF8] rounded-xl flex items-center justify-center'>
                    <img src={EditIcon} alt="" className='mr-2' />
                    <p className='font-semibold text-sm text-[#202224]'>Edit Pricelist</p>
                </button>
                <button className='h-[40px] w-[110px] bg-[#E2EAF8] rounded-xl flex items-center justify-center'>
                    <img src={DeleteIcon} alt="" className='mr-2' />
                    <p className='font-semibold text-sm text-[#EF3826]'>Delete</p>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Services