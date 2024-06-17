import React, { useState } from 'react'
import Link from 'next/link';

export interface HamburgerMenuState {
  open: boolean;
  setOpen: () => void;
  isHome?: boolean
}

const HamburgerMenu: React.FC<HamburgerMenuState> = ({ open, setOpen, isHome }) => {
  const [openSubmenu, setOpenSubmenu] = useState<boolean>(false)

  const handleClick = () => {
    setOpenSubmenu(!openSubmenu)
  }

  return (
    <div className={`fixed w-full h-full z-40 bg-[#ECEBEC] p-6 animate-fade-right ${!isHome ? "left-0" : ""}`}>
      <ul className='flex flex-col gap-5'>
        <Link onClick={setOpen} href="#offers" className='text-2xl font-rufina font-bold w-full hover:bg-[#141c24] hover:text-white p-5 rounded-xl'>Ofertas</Link>
        <Link onClick={setOpen} href="#about-us_section" className='text-2xl font-rufina font-bold w-full hover:bg-[#141c24] hover:text-white p-5 rounded-xl'>Nosotros</Link>
        <Link onClick={setOpen} href="#testimonials_section" className='text-2xl font-rufina font-bold w-full hover:bg-[#141c24] hover:text-white p-5 rounded-xl'>Opiniones</Link>
        <Link onClick={setOpen} href="#contact_section" className='text-2xl font-rufina font-bold w-full hover:bg-[#141c24] hover:text-white p-5 rounded-xl'>Contacto</Link>
      </ul>
    </div>
  )
}

export default HamburgerMenu