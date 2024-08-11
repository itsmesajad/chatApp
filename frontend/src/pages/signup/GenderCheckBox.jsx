import React from 'react'

const GenderCheckBox = () => {
  return (
    <div className="flex">
      <div className="flex">
        <label htmlFor="male" className='label gap-2 cursor-pointer'>
          <span className='label-text'>Male</span>
          <input type="checkbox" name="gender" id="male" className='checkbox checkbox-sm border-slate-900' />
        </label>
        
        <label htmlFor="female" className='label gap-2 cursor-pointer'>
          <span className='label-text'>Female</span>
          <input type="checkbox" name="gender" id="female" className='checkbox checkbox-sm border-slate-900' />
        </label>
      </div>
    </div>
  )
}

export default GenderCheckBox









// import React from 'react'

// const GenderCheckBox = () => {
//   return (
//     <div className="flex">
//       <div className="flex">
//         <label htmlFor="male" className='label gap-2 cursor-pointer'>
//           <span className='label-text'>Male</span>
//           <input type="checkbox" name="gender" id="male" className='checkbox checkbox-sm border-slate-900' />
//         </label>
        
//         <label htmlFor="female" className='label gap-2 cursor-pointer'>
//           <span className='label-text'>Female</span>
//           <input type="checkbox" name="gender" id="female" className='checkbox checkbox-sm border-slate-900' />
//         </label>
//       </div>
//     </div>
//   )
// }

// export default GenderCheckBox