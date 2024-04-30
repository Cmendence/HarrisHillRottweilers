import React from 'react'
import Logo from '../assets/logo.svg'

export default function Home () {

   return (
         <div className='bg-slate-300 h-screen w-screen'>
            <div className='text-center'>
            <img src={Logo}/>
            <h1>HOME PAGE</h1>
            </div>
         </div>
   )
}