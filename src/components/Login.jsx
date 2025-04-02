import React,{useState} from 'react'
import Header from './Header'

const Login = () => {
  const[isSIgnIn,setisSignIn]=useState(true)

  const toggleSignIn=()=>{
   setisSignIn(!isSIgnIn)
  }
  return (
    <div className="relative h-screen w-full">
  {/* Background Image */}
  <div 
    className="absolute inset-0 bg-no-repeat bg-cover bg-center" 
    style={{ backgroundImage: "url('https://assets.nflxext.com/ffe/siteui/vlv3/fbf440b2-24a0-49f5-b2ba-a5cbe8ea8736/web/IN-en-20250324-TRIFECTA-perspective_d7c906ec-0531-47de-8ece-470d5061c88a_large.jpg')" }}
  ></div>

  {/* Overlay to Darken Background (Optional for better contrast) */}
  <div className="absolute inset-0 "></div>

  {/* Header */}
  <Header />

  {/* Centered Form */}
  <div className="flex justify-center items-center h-screen relative z-10">
   
    <form className="w-3/12 p-12 bg-black  opacity-70 rounded-lg">
   <h1 className='text-white py-3 text-3xl font-bold' >{isSIgnIn?'Sign In':'Sign Up'} </h1>
   {!isSIgnIn &&  <input type="text" className="w-full my-4 p-4 border-2 bg-gray-700 text-white" placeholder="Name" />}
      <input type="text" className="w-full my-4 p-4 border-2 bg-gray-700 text-white" placeholder="Email or MobileNumber" />
      <input type="password" className="w-full my-4 p-4 border-2 bg-gray-700 text-white" placeholder="Password" />
      <button className="w-full bg-red-600 text-white my-6 p-4 rounded-md"> {isSIgnIn?'Sign In':'Sign Up'}</button>
      <p onClick={toggleSignIn} className='text-white text-1xl'>{isSIgnIn?'New to Netflix ? Sign Up Now':'Already Registered Sign In Now'}</p>
    </form>
  </div>
</div>

  )
}

export default Login

