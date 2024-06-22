import React from 'react';
import {
  FormGroup,
  InputLabel,
  InputContent,
  UploadField
} from './styles';
import { UploadInputProp } from './type';
import UploadIcon from "../../assets/svg/upload-icon.svg"

export const UploadInput: React.FC<UploadInputProp> = () => {
  return (
    <FormGroup>
      <InputLabel htmlFor='dropzone-file'>
        <InputContent>
          <div className='flex items-center justify-center bg-white w-[217px] h-[50px] rounded-md my-5'>
            <img src={UploadIcon} alt="" className='mr-2' />
            <p className='font-bold text-[#1A1D1F] text-sm'>Click or Drop Image</p>
          </div>
          
        </InputContent>
        <UploadField id='dropzone-file' type='file' />
      </InputLabel>
    </FormGroup>
  );
};

export default UploadInput;
