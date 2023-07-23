import React, { useState } from 'react'
import Modal from 'react-responsive-modal';
import LoginDialogue from './LoginDialogue';

const Navbar = () => {
    const [loginDialogue, setLoginDialogue] = useState(false);

    const [loginOrSignup, setLoginOrSignup] = useState('login');
    const openLoginDialogue = () => setLoginDialogue(true);
    const closeLoginDialogue = () => {
        setLoginDialogue(false);
        setLoginOrSignup('login');
        console.log('here');
    }
  return (
    <div>
        <div className='w-[85%] h-[68px] bg-[#D9D9D9] border-2 border-[#D9D9D9] text-[12px] md:text-[18px]  rounded-lg  bg-opacity-25 items-center px-4  mt-8 flex justify-between text-white mx-auto'>
            <div>Homepage</div>
            <div className='flex space-x-4'>
                <div onClick={openLoginDialogue}>Login</div>
                <div className='border border-white px-2 rounded-sm cursor-pointer' >Create Account</div>
            </div>
        </div>
        <Modal open={loginDialogue} onClose={closeLoginDialogue}  center>
        <LoginDialogue closeLoginDialogue={closeLoginDialogue} />
      </Modal>
    </div>
  )
}

export default Navbar
