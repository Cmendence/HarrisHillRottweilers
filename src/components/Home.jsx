import Logo from '../assets/logo.svg'

export default function Home() {
   return (
      <div className='flex justify-center min-h-screen mt-12'>
         <div className='text-center'>
            <img src={Logo} className='w-1/2 mx-auto' alt="Logo" />
            <h1 className='text-5xl text-gray-800 font-extrabold underline mt-12'>HOME PAGE</h1>
            <p></p>
         </div>
      </div>
   )
}