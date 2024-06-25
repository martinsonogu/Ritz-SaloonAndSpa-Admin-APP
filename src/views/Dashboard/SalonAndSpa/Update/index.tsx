import React, { useState } from 'react'
import BackIcon from "../../../../assets/svg/back-icon.svg"
import PlusIcon from "../../../../assets/svg/plus-icon.svg"
import {UploadInput} from "../../../../components/uploadInput"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Services from './Services'


const Update = () => {
  const [value, setValue] = useState('');
  return (
    <div className='mt-5 ml-5'>
      <h3 className='text-[#4B0C67] text-2xl font-semibold leading-6 mb-[20px]'>
          Add New Services
      </h3>
      <div className='flex items-start justify-between w-full'>
        <div className='left w-[67%]'>
          <div className=' bg-white p-5 rounded-md'>
              <div className='flex items-center justify-between w-full'>
                <div className='flex items-center'>
                  <div className='h-[32px] w-[16px] bg-[#B5E4CA] rounded-lg'/>
                  <p className='font-semibold text-xl text-[#1A1D1F] ml-2'>Name & Description</p>
                </div>
            <button className='h-[40px] w-[95px] border-2 border-[#EFEFEF] rounded-md flex items-center justify-center'>
              <img src={BackIcon} alt="" className='mr-2' />
              <p className='font-bold text-sm'>Back</p>
            </button>
          </div>
          <div className='mt-[32px]'>
            <h3 className='text-[#33383F] font-semibold text-sm mb-3'>
              Product title
            </h3>
            <input type="text" className='w-full rounded-xl h-[48px] bg-white border-2' />
          </div>
          <div className='mt-[32px]'>
            <h3 className='text-[#33383F] font-semibold text-sm mb-3'>
              Content
            </h3>
            <div>
              <ReactQuill theme="snow" value={value} onChange={setValue} />
            </div>
            
            </div>
          </div>
          <div className='bg-white p-5 rounded-md mt-5'>
            <h3 className='text-[#33383F] font-semibold text-sm mb-3'>
              Specific Service
            </h3>
            <div>
              <div className='flex items-center justify-between mb-2'>
              <input type="text" className='w-full rounded-xl h-[48px] bg-[#F4F4F4] border-2 mr-2 pl-3' placeholder='Service title' />
              <input type="number" className='w-full rounded-xl h-[48px] bg-[#F4F4F4] border-2 pl-3' placeholder='Amount' />
              </div>
              <div className='flex items-center justify-between mb-2'>
              <input type="text" className='w-full rounded-xl h-[48px] bg-[#F4F4F4] border-2 mr-2 pl-3' placeholder='Service title' />
              <input type="number" className='w-full rounded-xl h-[48px] bg-[#F4F4F4] border-2 pl-3' placeholder='Amount' />
              </div>
              <div className='flex justify-end'>
                <button className='h-[40px] w-[95px] border-2 border-[#EFEFEF] rounded-md flex items-center justify-center'>
                <img src={PlusIcon} alt="" className='mr-2' />
                <p className='font-bold text-sm text-[#9A9FA5]'>Add</p>
                </button>
              </div>
            </div>
          </div>
          <div className='bg-white p-5 rounded-md mt-5'>
            <div className='flex items-center'>
              <div className='h-[32px] w-[16px] bg-[#B1E5FC] rounded-lg'/>
              <p className='font-semibold text-xl text-[#1A1D1F] ml-2'>Images & CTA</p>
            </div>
            <div className=''>
              <h3 className='text-[#33383F] font-semibold text-sm my-3'>
              Cover Images
              </h3>
              <UploadInput/>
            </div>
          </div>
          <div className='bg-white p-5 rounded-md mt-5'>
            <div className='flex justify-end'>
                <button className='h-[40px] w-[128px] bg-[#4B0C67] rounded-md font-bold text-sm text-[#FCFCFC]'>
                Publish Now
              </button>
              {/* <button className='flex items-center justify-center'>

              </button> */}
            </div>
          </div>
          <h3 className='text-[#4B0C67] text-2xl font-semibold leading-6 mb-6 mt-12'>
          Edit Services
          </h3>
          <div className='container w-full bg-white rounded-lg'>
            <div className='top border-b-[#D5D5D5] border-b-2 h-[50px] mb-2'>
              Hello
            </div>
            <div className='bottom pb-8'>
              <Services />
              <Services />
              <Services/>
            </div>
          </div>

        </div>
        
        <div className='right w-[30%] bg-black'>Hello</div>
      </div>
    </div>
  )
}

export default Update