import React, { useState } from 'react'
import EditIcon from '../../../../assets/svg/edit-icon.svg'
import DeleteIcon from '../../../../assets/svg/delete-icon.svg'
import Modal from './Modal';
interface ServiceProps {
  id: string;
  title: string;
  image: string;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const Services: React.FC<ServiceProps> = ({ id, title, image, onEdit, onDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditClick = () => {
    setIsModalOpen(true);
    onEdit(id);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className=' border-b-2 border-b-[#D5D5D5] p-6'>
        <div className='inner-Container flex items-center justify-between'>
            <div className='imgTitle flex items-center w-[59%]'>
                <img src={image} alt="" className='w-[213px] h-[141px] object-contain mr-6' /> 
                <h3 className='font-bold text-sm text-[#202224]'>{title}</h3>  
            </div>
            <div className='buttton w-[40%] flex items-center justify-between'>
                  <button
                      onClick={handleEditClick}
                      className='h-[40px] w-[125px] bg-[#E2EAF8] rounded-xl flex items-center justify-center'>
                    <img src={EditIcon} alt="" className='mr-2' />
                    <p className='font-semibold text-sm text-[#202224]'>Edit Pricelist</p>
                </button>
                  <button
                      onClick={() => onDelete(id)}
                      className='h-[40px] w-[110px] bg-[#E2EAF8] rounded-xl flex items-center justify-center'>
                    <img src={DeleteIcon} alt="" className='mr-2' />
                    <p className='font-semibold text-sm text-[#EF3826]'>Delete</p>
                </button>
            </div>
        </div>
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2>Edit Pricelist for {title}</h2>
        {/* Add form or additional content here */}
        <div className='bg-white p-5 rounded-md mt-5'>
          <div className='flex justify-end'>
            <button
              onClick={handleCloseModal}
              className='h-[40px] w-[128px] bg-[#fcfcfc]] rounded-md font-bold text-sm text-[#4B0C67]'>
                Cancel
              </button>
              <button className='h-[40px] w-[128px] bg-[#4B0C67] rounded-md font-bold text-sm text-[#FCFCFC]'>
                Submit
              </button>
            </div>
          </div>
        </Modal>
    </div>
  )
}

export default Services