import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='bg-white mb-20 h-[124px] max-w-[1920px] flex justify-center items-center'>
        <img src="/logo.svg"/>
    </div>
  )
}

export default Navbar