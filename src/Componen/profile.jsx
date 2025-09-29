import React from 'react'
import gambar from "../public/rika.jpg"

const Profile = () => {
  return (
    <div className='bg-blue-400 shadow-md lg:rounded w-220 my-30 mx-auto'>
        <div className='ml-20 pt-4'>
        <img className='rounded-full' src={gambar} alt="gambar" width={100} />
    </div>

    <div>
        <h2 className='text-3xl font-bold text-center -ml-100 pt-2'>Narendra Sakti Widhitama</h2>
    </div>

    <div className='-ml-170 pt-2'>
        <h3 className='text-2xl font-medium text-center'>motto</h3>
    </div>
    <div className='ml-15'>
    <p className='text-2xl font-medium'>semua orang pasti takut ketika mengalami error justru itulah letak asiknya kita ga tau errornya kita menjelajah satu persatu</p>
    </div>

    <div className="box">
        <h1></h1>
    </div>
    </div>
  )
}

export default Profile