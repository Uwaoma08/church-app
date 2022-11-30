import React from 'react'

const ChurchInput = ({placeholder, successIcon}) => {
  return (
    <div className="border  my-10 mt-4 mb-10 flex justify-center items-center h-[62px] rounded-md active:border-blueColor border-greyBorder ">
      <p className='mx-5 border-r h-[62px] pt-[14px] pr-10 pl-5 text-[25px] text-gray-400'>@</p>
      <input
        placeholder={placeholder}
        className="w-full h-[30px] text-blueColor text-[20px] outline-none"
      />
      { successIcon ? <img src={successIcon} alt="success-icon" className="h-[22.25px] mx-5"/> : "" }
    </div>
  )
}

export default ChurchInput