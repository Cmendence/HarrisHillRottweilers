import React from "react"

export default function DogCard({dog}) {

   return(

   <div>
        <div className='lg:w-48 w-24 rounded-lg text-center lg:m-4 m-2'>
             <img src={dog.image} className='rounded-lg shadow-lg shadow-gray-600'/>    
             <h2 className='font-semibold lg:text-2xl text-md mt-1 text-gray-800'>{dog.name}</h2>
             <p className='font-semibold lg:text-lg text-xs text-gray-800'>Age: {dog.age}</p>
         </div>
   </div>
   )
}