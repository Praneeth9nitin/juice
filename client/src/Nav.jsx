import React from 'react'

function Nav() {
  return (
    <div className='flex font-poppins p-7 bg-transparent relative z-50 text-white'>
        <a className='m-5 cursor-pointer'>Home</a>
        <a className='m-5 cursor-pointer'>Contacts</a>
        <a className='m-5 cursor-pointer'>About</a>
    </div>
  )
}

export default Nav