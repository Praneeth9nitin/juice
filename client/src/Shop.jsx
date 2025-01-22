import React from 'react'
import {fruit} from './Array'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useState } from 'react'

function Shop() {
    const [cart,setCart] = useState(0)
    useGSAP(()=>{
        gsap.from('.items',{y:-100,ease:"power2.inOut",opacity:0,duration:1.5,stagger:0.25})
    })
  return (
    <div className='flex justify-around h-screen static'>
        {fruit.map((items,index)=>{
            return(
                <div key={index} className='font-poppins w-screen flex flex-col items-center justify-center text-white text-6xl font-bold overflow-hidden' style={{backgroundColor:items.color}}>
                    <div className='m-10'>{items.name}</div>
                    <img className="h-56 items" src={items.bg} alt="" />
                    <button className= 'text-sm m-10 bg-white text-black p-3 rounded-3xl hover:scale-125'>Add to cart</button>
                </div>
            )
        })}
    </div>
  )
}

export default Shop