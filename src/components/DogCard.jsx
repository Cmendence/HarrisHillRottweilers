import React from "react"

export default function DogCard({dog}) {

   return(

   <div>
        <div className='lg:w-48 w-36 rounded-lg text-center lg:m-4 m-4'>
             <img src={dog.image} className='rounded-lg shadow-lg shadow-gray-600 lg:h-72 h-52'/>    
             <h2 className='font-semibold lg:text-xl text-md mt-1 text-gray-800'>{dog.name}</h2>
         </div>
   </div>
   )
}