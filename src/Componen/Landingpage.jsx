import React from 'react'

const Landingpage = () => {
  return (
    <div className="font-sans text-gray-800 bg-gray-50">
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-2  flex justify-between items-center">
          <h1 className=" font-bold text-blue-600">SMK BINA NUSANTARA</h1>
          <div className="space-x-6 hidden md:flex">
            <a href="#jadwal" className="hover:text-blue-500">Jadwal</a>
            <a href="#fitur" className="hover:text-blue-500">Jurusan</a>
            <a href="#daftar" className="hover:text-blue-500">Daftar</a>
          </div>
        </div>
      </nav>

      <div className="bg-blue-600 text-white py-24 px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">SELAMAT DATANG DI PPDB</h2>
        <p className="text-lg md:text-xl mb-8">DAFTAR SMK BINA NUSANTARA SEKARANG JUGA</p>
        <a href="#daftar" className="bg-white text-blue-600 px-6 py-2 rounded-md font-bold hover:bg-gray-200 transition">
          Daftar Sekarang
        </a>
      </div>

      <div id="jadwal" className="max-w-4xl mx-auto py-16 px-4">
        <h3 className="text-3xl font-bold text-center mb-8">Jadwal PPDB</h3>
        <div className="bg-white rounded-lg shadow-md p-6">
          <ul className="space-y-4 text-lg">
            <h5><strong>14 Juni:</strong> Pendaftaran online</h5>
            <h5><strong>5 Juli:</strong> Seleksi dan verifikasi</h5>
            <h5><strong>12 Juli:</strong> Pengumuman</h5>
            <h5><strong>17 Juli:</strong> Daftar ulang</h5>
          </ul>
        </div>
      </div>

      <div id="fitur" className="bg-gray-100 py-15 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">JURUSAN SMK BINA NUSANTARA</h3>
          <div className="grid md:grid-cols-2 gap-10">
            <Jurusan namajurusan="TKJ" keterangan="Jurusan Teknik Komputer dan Jaringan (TKJ) merupakan salah satu kompetensi keahlian yang fokus pada penguasaan teknologi komputer dan jaringan. Jurusan ini dirancang untuk memberikan siswa keterampilan praktis dalam instalasi, konfigurasi, dan pemeliharaan perangkat keras serta perangkat lunak komputer, jaringan komputer, dan sistem komunikasi data. Selain itu siswa juga diberikan keterampilan programing full stack untuk peminatan programer dan juga diberikan keterampilan desain grafis serta editing video bagi peminatan Multimedia" />
            <Jurusan namajurusan="TSM" keterangan="Jurusan Teknik Sepeda Motor (TSM) adalah kompetensi keahlian yang berfokus pada penguasaan teknologi otomotif, khususnya dalam bidang perawatan, perbaikan, dan pengelolaan sepeda motor. Program ini bertujuan untuk menghasilkan tenaga profesional yang terampil dan kompeten dalam industri otomotif, baik dari segi mekanik maupun elektronik sepeda motor." />
            <Jurusan namajurusan="DPB" keterangan="Jurusan Desain dan Produksi Busana merupakan kompetensi keahlian yang mengajarkan keterampilan dalam mendesain, memproduksi, dan mengelola busana secara kreatif dan teknis. Program ini bertujuan untuk menghasilkan tenaga profesional yang kompeten di bidang fashion, mulai dari konsep desain hingga proses produksi pakaian siap pakai. Jurusan ini cocok bagi mereka yang memiliki minat dalam dunia mode dan industri tekstil." />
            <Jurusan namajurusan="AKL" keterangan="Jurusan Akuntansi adalah kompetensi keahlian yang berfokus pada penguasaan keterampilan dan pengetahuan di bidang pencatatan, pengelolaan, dan pelaporan keuangan. Program ini mempersiapkan siswa untuk mampu mengelola keuangan secara akurat, menyusun laporan keuangan, serta memahami prinsip-prinsip perpajakan dan audit. Jurusan ini cocok bagi mereka yang tertarik dengan angka, analisis data, serta ingin berkarir di dunia bisnis dan keuangan.Kompetensi Utama" />
          </div>
        </div>
      </div>
      <div id="daftar" className="py-16 px-4 bg-white">
        <div className="max-w-xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8">Formulir Pendaftaran</h3>
          <div className="space-y-6 bg-gray-50 p-6 rounded-lg shadow-md">
            <Inputpengisian label="Nama Lengkap" type="text" />
            <Inputpengisian label="Email" type="email" />
            <Inputpengisian label="Asal Sekolah" type="text" />
            <Inputpengisian label="Nomor Telepon" type="tel" />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md font-bold hover:bg-blue-700 transition"
            >
              Kirim Pendaftaran
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Jurusan({ namajurusan, keterangan }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
      <h4 className="text-xl font-semibold mb-2">{namajurusan}</h4>
      <p>{keterangan}</p>
    </div>
  );
}

function Inputpengisian({ label, type }) {
  return (
    <div>
      <label className="block font-medium mb-1">{label}</label>
      <input
        type={type}
        required
        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  )
}

export default Landingpage;