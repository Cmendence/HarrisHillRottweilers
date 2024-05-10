import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function DogDetails() {
   const [enlargedImageIndex, setEnlargedImageIndex] = useState(null);

   const navigate = useNavigate();

   const getDogFromLS = localStorage.getItem("selectedDog");
   const selectedDog = JSON.parse(getDogFromLS);

   const goBack = () => {
      navigate(`/males`);
      window.scrollTo(0, 0);
    };

const toggleEnlargeImage = (index) => {
   setEnlargedImageIndex(enlargedImageIndex === index ? null : index);
}

   return (

      // {name: "Odysseus of Torma House",
      // id:1,
      // gender: "Male",
      // age: "3 months",
      // image: Odysseus ,
      // certs: ["https://images.unsplash.com/photo-1584445584400-1a7cc5de77ae?q=80&w=1960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"] ,
      // tags: " Male, Sold",
      // },

      <div className=''>
         <button
              onClick={goBack}
              className="bg-rose-900 rounded border-4 border-rose-900 hover:bg-rose-950 hover:border-rose-950 active:shadow-sm text-slate-100 font-semibold shadow-md shadow-black m-4 w-28 h-10"
            >
              Back
            </button>
      <div className=' text-center'>
         <h1 className='font-semibold text-gray-800 text-3xl my-4'>{selectedDog.name}</h1>
<div className='flex justify-center mx-8 my-2'>
         <img src={selectedDog.image} 
              alt={`image of ${selectedDog.name}`}
              className='lg:w-1/3 rounded-lg shadow-lg shadow-gray-900'     
         />
      </div>
         <div className='flex justify-center font-semibold'>
         <p className='m-2'>Age: {selectedDog.age}</p>
         <p className='m-2 '>Gender: {selectedDog.gender}</p>
         </div>
         <div className=' relative flex'>
            {selectedDog.certs.map((cert, index) => (
               <div key={index} className={`mx-6 flex items-center flex-col ${enlargedImageIndex === index ? 'absolute lg:inset-x-72 bottom-0 lg:w-1/2 object-contain z-50 text-yellow-400' : 'lg:w-1/5 w-1/4'}`}>
                  <h2 className='font-semibold lg:text-xl'>{cert.name}</h2>
               <img  src={cert.image} 
               className={` rounded-lg m-4 `} 
               alt={`certifications for ${selectedDog.name}`} 
               onClick={()=> toggleEnlargeImage(index)}
               />
               </div>
            ))}
         </div>
      </div>
      </div>
   )
}