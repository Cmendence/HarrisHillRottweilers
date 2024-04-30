import React from 'react'
import Logo from '../assets/logo.svg'

export default function Home () {

   return (
         <div className='bg-slate-300 h-screen'>
            <div className='content-center'>
            <img src={Logo}/>
            </div>
         </div>
   )
}