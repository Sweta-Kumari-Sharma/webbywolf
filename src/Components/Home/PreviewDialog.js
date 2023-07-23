import React from 'react'
import close from '../../Images/Vector2.png'
const PreviewDialog = ({image, closePreviewDialogue,tags}) => {
  return (
    <div className=' w-[900px]  mx-auto rounded-md  font-[Euclid Circular B]'>
      <div className='bg-[#F5F5F5] w-[100%] flex justify-between px-6 py-2 items-center'>
            <div>Preview ID: {image.id}</div>
            <img src={close} alt='' onClick={closePreviewDialogue} className='cursor-pointer '/>
      </div>
      <div className=' flex flex-col space-y-4 md:flex-row md:space-x-8 p-4'>
        <img src={image.largeImageURL} alt='' className='w-[350px] md:w-[500px]'/>
        <div>
            <div className='my-4 font-[500] text-[22px] text-[#3B4043]'>Download</div>
            <div className='w-[350px] md:w-[100%]'>
                <div className=' flex justify-between items-center h-[50px] px-4 py-2 border rounded-lg'>
                    <html for="small">Small</html>
                    <div className='flex space-x-1'>
                        <div>640*960</div>
                        <input type="radio" id="small"  value="small" name='size'/>
                    </div>
                </div>
                <div className=' flex justify-between items-center px-4 py-2 border rounded-lg'>
                    <html for="medium">Medium</html>
                    <div className='flex space-x-1'>
                        <div>1920*2660</div>
                        <input type="radio" id="medium"  value="medium"  name='size'/>
                    </div>
                </div>
                <div className=' flex justify-between items-center px-4 py-2 border rounded-lg'>
                    <html for="big">Big</html>
                    <div className='flex space-x-1'>
                        <div>2400*3660</div>
                        <input type="radio" id="big"  value="big"  name='size'/>
                    </div>
                </div>
                <div className=' flex justify-between items-center px-4 py-2 border rounded-lg'>
                    <html for="original">Original</html>
                    <div className='flex space-x-1'>
                        <div>3850*5640</div>
                        <input type="radio" id="original"  value="original"  name='size'/>
                    </div>
                </div>
            </div>
            <button className='w-[350px] md:w-[100%] bg-green-400 rounded-lg text-white flex items-center justify-center py-2 my-4'>Download for free</button>
            <div>
                <div>Information</div>
                <div className='grid grid-cols-3 grid-flow-row md:gap-y-4 md:gap-x-20'>
                    <div>
                        <div className='text-[10px] md:text-[13px] text-[#717579] font-[Euclid Circular B]'>User</div>
                        <div className='text-[#3B4043] text-[12px] md:text-[16px] font-[600]'>{image.user}</div>
                    </div>
                    <div>
                        <div className='text-[10px] md:text-[13px] text-[#717579] font-[Euclid Circular B]'>User ID</div>
                        <div className='text-[#3B4043] text-[12px] md:text-[16px] font-[600]'>{image.user_id}</div>
                    </div>
                    <div>
                        <div className='text-[10px] md:text-[13px] text-[#717579] font-[Euclid Circular B]'>Type</div>
                        <div className='text-[#3B4043] text-[12px] md:text-[16px] font-[600]'>{image.type}</div>
                    </div>
                    <div>
                        <div className='text-[10px] md:text-[13px] text-[#717579] font-[Euclid Circular B]'>Views</div>
                        <div className='text-[#3B4043] text-[12px] md:text-[16px] font-[600]'>{image.views}</div>
                    </div>
                    <div>
                        <div className='text-[10px] md:text-[13px] text-[#717579] font-[Euclid Circular B]'>Downloads</div>
                        <div className='text-[#3B4043] text-[12px] md:text-[16px] font-[600]'>{image.downloads}</div>
                    </div>
                    <div>
                        <div className='text-[10px] md:text-[13px] text-[#717579] font-[Euclid Circular B]'>Likes</div>
                        <div className='text-[#3B4043] text-[12px] md:text-[16px] font-[600]'>{image.likes}</div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div className='flex  items-center  mt-4 space-x-4 cursor-pointer' >
      <div className='font-[700] text-[18px] p-4'>Tags: </div>
      {

      tags.map(tag => (
                    <div className='bg-[#F5F5F5] px-4 rounded-lg flex justify-center items-center'>
                        {tag}
                    </div>
                    
                ))
      }
      </div>
    </div>
  )
}

export default PreviewDialog
