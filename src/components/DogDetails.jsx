import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function DogDetails({dog}) {

   const navigate = useNavigate();

   const goBack = () => {
      navigate(`/males`);
      window.scrollTo(0, 0);
    };

   return (

      <div className=''>
         {/* <img src={dog.image} /> */}
         <button
              onClick={goBack}
              className="bg-rose-900 rounded border-4 border-rose-900 hover:bg-rose-950 hover:border-rose-950 active:shadow-sm text-slate-100 font-semibold shadow-md shadow-black m-4 w-28 h-10"
            >
              Back
            </button>
      </div>
   )
}