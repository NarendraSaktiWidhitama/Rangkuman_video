import React from 'react'

const App = () => {
  return (
    <div className='flex h-screen justify-center items-center'>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src="https://shopee.co.id/inspirasi-shopee/wp-content/uploads/2022/06/anya-spy-x-family.webp" alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Anya Forger</div>
          <p className="text-gray-700 text-base">
            halo nama saya Anya saya adalah si kecil yang disukai banyak orang karena saya imut dan lucu bikin semua orang suka saya bocil killer.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#anime</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#spyxfamily</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#myWaifu</span>
        </div>
      </div>

    </div>
  )
}
export default App