import React from 'react'
import {dogs} from '../assets/dogs'
import DogCard from './DogCard'


export default function Males() {


   return(
      <div className='flex justify-center lg:my-4 flex-wrap lg:mx-8'>
         {dogs.map( dog => (
         // <div className='w-1/5 rounded-lg text-center m-4' key={dog.name}>
         //     <img src={dog.image} className='rounded-lg shadow-lg shadow-gray-600'/>    
         //     <h2 className='font-semibold text-2xl m-2 text-gray-800'>{dog.name}</h2>
         //     <h2 className='font-semibold text-xl m-2 text-gray-800'>Age: {dog.age}</h2>
         // </div>
         <DogCard 
            key={dog.name}
            dog={dog}
         />
         ))}
      </div>
   )
}