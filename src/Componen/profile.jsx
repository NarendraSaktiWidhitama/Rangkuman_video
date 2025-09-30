import React from 'react'
import gambar from "../public/rika.jpg"
import images from "../public/Beatrix.png"

const Profile = () => {
  return (
        <div className='ml-90 pt-16'>
          <div className='shadow w-100 -ml-20'>
        <img className='rounded-full ml-10 pt-1' src={gambar} alt="gambar" width={100} />
        <div className='-ml-120 pt-4'>
        <h2 className='text-3xl font-bold text-center'>Nama : Narendra Sakti Widhitama</h2>
        </div>
        <div className='-ml-205'>
        <h2 className='text-3xl font-bold text-center'>Absen : 24</h2>
        <div className='ml-10'>
        <h2 className='text-3xl font-bold text-center'>Jurusan : TKJ</h2>
        </div>
        </div>
        </div>

        <div className='pt-10'>
    <div className='bg-gray-200 shadow-md lg:rounded w-250 -ml-20'>
      <div className='-ml-225'>
        <h3 className='text-3xl font-bold text-center ml-25'>Tentang kami</h3>
    </div>
    <div className='ml-2'>
    <p className='font-medium'>halo saya sakti,saya ingin menjadi seorang programer handal dan saya melatih skil setiap hari dan setelah saya bisa saya akan mengulik di bidang lain kayak desain juga.soalnya aku juga suka editing bukanhanya video tapi kayak buat thumnail gitu juga makanya aku akan belajar tentang desain.</p>
    </div>
    </div>
    <div className='-ml-15 pt-4'>
      <h3>Hobby saya</h3>
      </div>
      <div className='-ml-15 pt-4'>
      <h4>saya sangat suka bermain mobile legends</h4>
      <p>teman teman bagi yang mau mabar ayo dong bisa banget yak langsung follow akunku</p>
      </div>
      <div className='-ml-30 pt-12'>
        <img className='w-50' src={images} alt="images" />
      </div>
    </div>
    </div>
  )
}

export default Profile;