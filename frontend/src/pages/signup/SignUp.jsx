import React from 'react'
import GenderCheckBox from './GenderCheckBox.jsx'


const SignUp = () => {
  return (
    <div className='flex mx-auto flex-col items-center justify-center min-w-64 sm:min-w-96 ring-2 ring-yellow-400 rounded-lg'>
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding bg-opacity-0 h-full backdrop-filter backdrop-blur-sm">
        <h1 className='text-center text-2xl sm:text-3xl font-semibold text-gray-300 '>SIGNUP</h1>
        <form className='flex flex-col gap-3 mb-1'>
          
          <div className="flex flex-col gap-1">
          <label htmlFor="fullName" className='text-gray-300'>Full Name</label>
          <input placeholder='enter username' className='ps-2 bg-transparent  focus:outline-none ring-2 ring-yellow-400 rounded-sm ' type="text" name="" id="fullName" />
          </div>
          
          <div className="flex flex-col gap-1">
          <label htmlFor="username" className='text-gray-300'>Username</label>
          <input placeholder='enter username' className='ps-2 bg-transparent  focus:outline-none ring-2 ring-yellow-400 rounded-sm ' type="text" name="" id="username" />
          </div>

          <div className="flex flex-col gap-1">
          <label htmlFor="password" className='text-gray-300'>Password</label>
          <input placeholder='enter password' className='ps-2 bg-transparent  focus:outline-none ring-2 ring-yellow-400 rounded-sm ' type="password" name="" id="password" />
          </div>

          <div className="flex flex-col gap-1">
          <label htmlFor="confirmPassword" className='text-gray-300'>Confirm Password</label>
          <input placeholder='confirm password' className='ps-2 bg-transparent  focus:outline-none ring-2 ring-yellow-400 rounded-sm ' type="password" name="" id="confirmPassword" />
          </div>
          
          {/* <div className="flex flex-col gap-1"> */}
          <GenderCheckBox/>
          {/* </div> */}

          <button type='button' className='bg-white p-1  rounded-lg mt-1 hover:bg-yellow-400 active:text-white font-semibold sm:font-bold text-black'>SIGNUP</button>
        </form>
        <a className='hover:text-yellow-400 text-xs text-white font-thin' href="">Have an account? click here to login</a>
      </div>
    </div>
  )
}

  export default SignUp










// import React from 'react'
// import GenderCheckBox from './GenderCheckBox.jsx'


// const SignUp = () => {
//   return (
//     <div className='flex mx-auto flex-col items-center justify-center min-w-64 sm:min-w-96 ring-2 ring-yellow-400 rounded-lg'>
//       <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding bg-opacity-0 h-full backdrop-filter backdrop-blur-sm">
//         <h1 className='text-center text-2xl sm:text-3xl font-semibold text-gray-300 '>SIGNUP</h1>
//         <form className='flex flex-col gap-3 mb-1'>
          
//           <div className="flex flex-col gap-1">
//           <label htmlFor="fullName" className='text-gray-300'>Full Name</label>
//           <input placeholder='enter username' className='ps-2 bg-transparent  focus:outline-none ring-2 ring-yellow-400 rounded-sm ' type="text" name="" id="fullName" />
//           </div>
          
//           <div className="flex flex-col gap-1">
//           <label htmlFor="username" className='text-gray-300'>Username</label>
//           <input placeholder='enter username' className='ps-2 bg-transparent  focus:outline-none ring-2 ring-yellow-400 rounded-sm ' type="text" name="" id="username" />
//           </div>

//           <div className="flex flex-col gap-1">
//           <label htmlFor="password" className='text-gray-300'>Password</label>
//           <input placeholder='enter password' className='ps-2 bg-transparent  focus:outline-none ring-2 ring-yellow-400 rounded-sm ' type="password" name="" id="password" />
//           </div>

//           <div className="flex flex-col gap-1">
//           <label htmlFor="confirmPassword" className='text-gray-300'>Confirm Password</label>
//           <input placeholder='confirm password' className='ps-2 bg-transparent  focus:outline-none ring-2 ring-yellow-400 rounded-sm ' type="password" name="" id="confirmPassword" />
//           </div>
          
//           {/* <div className="flex flex-col gap-1"> */}
//           <GenderCheckBox/>
//           {/* </div> */}

//           <button type='button' className='bg-white p-1  rounded-lg mt-1 hover:bg-yellow-400 active:text-white font-semibold sm:font-bold text-black'>SIGNUP</button>
//         </form>
//         <a className='hover:text-yellow-400 text-xs text-white font-thin' href="">Have an account? click here to login</a>
//       </div>
//     </div>
//   )
// }

//   export default SignUp