import React from 'react'
import rightArrow from './assets/right.svg'
import leftArrow from './assets/left.svg'
import { useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import apple from './assets/apple.png'
import cherry from './assets/cherry.png'
import exotic from './assets/exotic.png'
import lemon from './assets/lemon.png'
import pear from './assets/pear.png'
import quience from './assets/orange.png'
import applebg from './assets/applebg.png'
import cherrybg from './assets/cherrybg.png'
import exoticbg from './assets/eroticbg.png'
import lemonbg from './assets/lemonbg.png'
import pearbg from './assets/pearbg.png'
import quiencebg from './assets/orangebg.png'

function Landing() {
    const [clicked, setClicked] = useState(0)
    useGSAP(()=>{
        gsap.to('.slide',{x:clicked*-100/6+"%",ease:"power2.inOut"})
        gsap.to('.slide1',{y:clicked*-100/6+"%",ease:"circ.out"})
        gsap.to('.slide2',{y:clicked*100/6+"%"})
    },[clicked])

    const fruit = [
        {
            name: "Apple",
            img: "some url",
            color:"#FFDEDD"
        },
        {
            name: "Exotic",
            img: "some url",
            color:"#E4E4FE"
        },
        {
            name: "Cherry",
            img: "some url",
            color:"#FEDCEC"
        },
        {
            name: "Pear",
            img: "some url",
            color:"#DCFFDE"
        },
        {
            name: "Lemon",
            img: "some url",
            color:"#FFDB8C"
        },
        {
            name: "Quience",
            img: "some url",
            color:"#99783E"
        },
    ]
    return (
        <div className='flex justify-center items-center font-poppins'>
        <div className='flex absolute top-0 left-0 slide'>
           <div style={{backgroundColor:fruit[0].color}}> 
                <div className='w-screen text-center h-screen flex justify-center items-center text-[400px] font-bold text-white'>{fruit[0].name}</div>
           </div>
           <div style={{backgroundColor:fruit[1].color}}>
                <div className='w-screen text-center h-screen flex justify-center items-center text-[400px] font-bold text-white'>{fruit[1].name}</div>
           </div>
           <div style={{backgroundColor:fruit[2].color}}>
                <div className='w-screen text-center h-screen flex justify-center items-center text-[350px] font-bold text-white'>{fruit[2].name}</div>
           </div>
           <div style={{backgroundColor:fruit[3].color}}>
                <div className='w-screen text-center h-screen flex justify-center items-center text-[400px] font-bold text-white'>{fruit[3].name}</div>
           </div>
           <div style={{backgroundColor:fruit[4].color}}>
                <div className='w-screen text-center h-screen flex justify-center items-center text-[400px] font-bold text-white'>{fruit[4].name}</div>
           </div>
           <div style={{backgroundColor:fruit[5].color}}>
                <div className='w-screen text-center h-screen flex justify-center items-center text-[300px] font-bold text-white'>{fruit[5].name}</div>
           </div>
        </div>
           <div className='flex fixed z-20 justify-between w-screen h-screen items-center bg-transparent top-1'>
            <div className= 'h-40 cursor-pointer static'  onClick={()=>{`${clicked}`!=0?setClicked((clicked)=>clicked-1):null;console.log(clicked)}}><img className='h-full' src={leftArrow} alt=""/></div>
            <div className='w-1/2 flex justify-between items-center absolute top-40 slide1 left-80 flex-col'>
            <div className='h-screen'><img className='object-cover w-44' src={apple} alt="" /></div>
            <div className='h-screen'><img className='object-cover w-52' src={exotic} alt="" /></div>
            <div className='h-screen'><img className='object-cover w-44' src={cherry} alt="" /></div>
            <div className='h-screen'><img className='object-cover w-60' src={pear} alt="" /></div>
            <div className='h-screen'><img className='object-cover w-64' src={lemon} alt="" /></div>
            <div className='h-screen'><img className='object-cover w-60' src={quience} alt="" /></div>
            </div>
            <div className='h-40 cursor-pointer static' onClick={()=>{`${clicked}`!=5?setClicked((clicked)=>clicked+1):null;console.log(clicked)}}><img className='h-full' src={rightArrow} alt=""/></div>
           </div>
           <div className='absolute z-40 slide2 -bottom-36'>
            <div className='h-screen'><img src={quiencebg} alt="" /></div>
            <div className='h-screen'><img src={lemonbg} alt="" /></div>
            <div className='h-screen'><img src={pearbg} alt="" /></div>
            <div className='h-screen'><img src={cherrybg} alt="" /></div>
            <div className='h-screen'><img src={exoticbg} alt="" /></div>
            <div className='h-screen'><img src={applebg} alt="" /></div>
           </div>
        </div>
    )
}

export default Landing