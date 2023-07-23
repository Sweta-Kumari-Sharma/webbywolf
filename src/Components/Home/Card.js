import React, { useState } from 'react'
import Modal from 'react-modal';
import PreviewDialog from './PreviewDialog';

const Card = ({image}) => {
  const [previewDialogue, setpreviewDialogue] = useState(false);
  const tags=image.tags.split(',');
  const openPreviewDialogue = () => setpreviewDialogue(true);
  const closePreviewDialogue = () =>  setpreviewDialogue(false);
  // console.log(tags);
  return (
    <>
    <div className='h-[230px] md:h-[400px] flex flex-col   items-center bg-[#D9D9D9] text-[Helvetica Neue] cursor-pointer' onClick={openPreviewDialogue}>
      <img  src={image.largeImageURL} alt='' className='h-[200px] md:h-[85%] flex items-center '/>
      <div className='flex justify-center items-center  mt-4 space-x-2 md:space-x-4 cursor-pointer' >
      {

      tags.map(tag => (
                    <div className='bg-[#F5F5F5] text-[6px] md:text-[13px] px-1 md:px-4 rounded-lg flex justify-center items-center'>
                        {tag}
                    </div>
                    
                ))
      }
      {/* <button className='p-2 bg-green-400 text-white flex justify-center rounded-lg items-center' onClick={openPreviewDialogue}>View</button> */}
      </div>
      
    </div>
      <Modal isOpen={previewDialogue}  onRequestClose={closePreviewDialogue} className='bg-white border-none md:w-[900px] md:mt-[100px] mx-auto flex justify-center items-center'>
          <PreviewDialog image={image} closePreviewDialogue={closePreviewDialogue} tags={tags}/>
        </Modal>
    </>
  )
}

export default Card
