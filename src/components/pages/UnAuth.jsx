
import { useNavigate } from "react-router-dom";
import SadDog from '../../assets/images/UnAuthDog.jpg'

export default function UnAuth() {


   const navigate = useNavigate();

   return (

      <div>
         <h1 className="lg:text-4xl text-3xl font-semibold my-6 text-center text-gray-800">Aw Biscuits!</h1>
         <p className="lg:text-xl font-semibold text-center text-gray-800">It looks like you don&apos;t have access to this.</p>
         <div className="flex flex-col items-center">
         <figure className="flex flex-col items-center my-6">
         <img src={SadDog} alt="Dog laying on floor looking up" className=" rounded-md lg:w-1/3 w-4/5 shadow-md shadow-black" />
<figcaption className="font-semibold mt-2 text-xs">Photo by <a className="text-rose-800" href="https://unsplash.com/@kvnsbl" rel="noopener" target="_blank">Kevin Seibel</a> </figcaption>

         </figure>
              <button
        onClick={() => navigate("/")}
        className="bg-rose-900 rounded border-4 border-rose-900 hover:bg-rose-950 hover:border-rose-950 active:shadow-sm text-slate-100 font-semibold shadow-md shadow-black lg:mx-12 my-4 mx-6 lg:w-28 h-10 w-20 lg:text-base text-xs"
      >
        Back to Home
      </button>

         </div>
      </div>
   )
}