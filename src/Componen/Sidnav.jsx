import React, { useState } from 'react'

const Sidnav = () => {
    const [open, setOpen] = useState(false);
  return (
    <div className='flex'>
        <div className={`fixed top-0 left-0 h-full w-60 bg-gray-200 text-white ${open ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out md:translate-x-0`}>
            <div className="text-3xl font-bold text-center pt-4 text-black">Menu</div>

            <nav className='space-y-3 pt-8'>
                <a href="/Dashboard"
                 className='block py-2 px-3 rounded hover:bg-gray-400 focus:shadow-outline text-black font-bold text-center'>Home</a>
                 <a href="/Profile"
                 className='block py-2 px-3 rounded hover:bg-gray-400 focus:shadow-outline text-black font-bold text-center'>Profile</a>
                <a href="/Tambahdata"
                className='block py-2 px-3 rounded hover:bg-gray-400 focus:shadow-outline text-black font-bold text-center'>Tambahdata</a>
                <a href="/Tambahmenu"
                className='block py-2 px-3 rounded hover:bg-gray-400 focus:shadow-outline text-black font-bold text-center'>Tambahmenu</a>
                <a href="/tabeldata" 
                className='block py-2 px-3 rounded hover:bg-gray-400 focus:shadow-outline text-black font-bold text-center'>Tabeldata</a>
                <a href="/tabelmenu" 
                className='block py-2 px-3 rounded hover:bg-gray-400 focus:shadow-outline text-black font-bold text-center'>Tabelmenu</a>
                <a href="/Editdata/:id" 
                className='block py-2 px-3 rounded hover:bg-gray-400 focus:shadow-outline text-black font-bold text-center'>Editmenu</a>
                <a href="/Editmenu/:id" 
                className='block py-2 px-3 rounded hover:bg-gray-400 focus:shadow-outline text-black font-bold text-center'>Editdata</a>
                <div className='pt-50'>
                <a href="/RegisterPage" 
                className='block py-2 px-3 rounded hover:bg-red-600 focus:shadow-outline text-black font-bold text-center'>LogOut</a>
                </div>
            </nav>

            <div className=''>
            </div>
        </div>
    </div>
  )
}

export default Sidnav;