import React from 'react'
// import {onCheckBoxGender, selectedGender} from './SignUp.jsx'

const GenderCheckBox = ({onCheckBoxGender, selectedGender}) => {
  return (
    <div className="flex">
      <div className="flex">
        <label htmlFor="male" className={`label gap-2 cursor-pointer ${selectedGender === 'male' ? 'selected' : ''}`}>
          <span className='label-text'>Male</span>
          <input onChange={() => onCheckBoxGender('male')} checked={selectedGender === 'male'} type="checkbox" name="gender" id="male" className='checkbox checkbox-sm border-slate-900' />
        </label>
        
        <label htmlFor="female" className={`label gap-2 cursor-pointer ${selectedGender === 'female' ? 'selected' : ''}`}>
          <span className='label-text'>Female</span>
          <input onChange={() => onCheckBoxGender('female')} checked={selectedGender === 'female'} type="checkbox" name="gender" id="female" className='checkbox checkbox-sm border-slate-900' />
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