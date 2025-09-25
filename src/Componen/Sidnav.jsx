import React, { useState } from 'react'

const Sidnav = () => {
    const [open, setOpen] = useState(false);
  return (
    <div className='flex'>
        <div className={`fixed top-0 left-0 h-full w-60 bg-gray-800 text-white ${open ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out md:translate-x-0`}>
            <div className="text-2xl font-bold text-center pt-4">Menu</div>

            <nav className='space-y-3 pt-8'>
                <a href="/Dashboard"
                 className='block py-2 px-3 rounded hover:bg-blue-600 focus:shadow-outline text-white font-bold text-center'>Home</a>
                <a href="/Tambahdata"
                className='block py-2 px-3 rounded hover:bg-blue-600 focus:shadow-outline text-white font-bold text-center'>Tambahdata</a>
                <a href="/tabeldata" 
                className='block py-2 px-3 rounded hover:bg-blue-600 focus:shadow-outline text-white font-bold text-center'>Tabeldata</a>
                <a href="/Editdata/:id" 
                className='block py-2 px-3 rounded hover:bg-blue-600 focus:shadow-outline text-white font-bold text-center'>Editdata</a>
            </nav>

            <div className=''>
            </div>
        </div>
    </div>
  )
}

export default Sidnav;