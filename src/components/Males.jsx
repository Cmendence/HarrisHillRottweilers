import React from 'react'
import {dogs} from '../assets/dogs'
import DogCard from './DogCard'


export default function Males() {


   return(
      <div className='flex justify-center flex-wrap lg:m-8 my-8'>
         {dogs.map( dog => (
         <DogCard 
            key={dog.name}
            dog={dog}
         />
         ))}
      </div>
   )
}