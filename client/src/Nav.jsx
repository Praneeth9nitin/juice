import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import cart from './assets/cart.svg'

function Nav() {
  const navigate = useNavigate()
  return (
    <div className='flex justify-between w-screen items-center font-poppins p-7 bg-transparent absolute text-xl z-50 text-blck'>
      <div className='flex justify-center'>
        <a className='m-5 cursor-pointer' onClick={()=>navigate("/")}>Home</a>
        <a className='m-5 cursor-pointer' onClick={()=>navigate("/shop")}>Shop</a>
        <a className='m-5 cursor-pointer'>Careers</a>
        <a className='m-5 cursor-pointer'>Partnership</a>
        <a className='m-5 cursor-pointer'>Contact</a>
      </div>
      <div><img className='border-2 border-black rounded-full p-2' src={cart} alt=""/></div>
    </div>
  )
}

export default Nav