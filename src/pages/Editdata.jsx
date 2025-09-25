import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function Editdata() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        makanan: "",
        paket: "",
        harga: "",
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const res = await axios.get(`http://localhost:5000/menu/${id}`);
            const data = Array.isArray(res.data) ? res.data[0] : res.data;
            setFormData(data)
        } catch (err) {
            console.error("Gagal mengambil data:", err);
            alert("Gagal mengambil data!");
        } finally {
            setLoading(false);
        }
    }

        fetchData();
    }, [id]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value})
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:5000/menu/${id}`,formData);
                // alert("Data berhasil diubah!");
                navigate("/tabeldata")
        } catch (err) {
            console.error("Gagal mengupdate data:", err);
            alert("Gagal mengupdate data!");
        }
    };

    if (loading) return <p className="text-center mt-10">Loading data</p>
    
    return (
                <div className="flex items-center justify-center min-h-screen bg-linear-to-r from-cyan-500 to-orange-500 ml-60">
            <div className="bg-amber-50 p-8 rounded-lg shadow-md w-full max-w-sm">
                <h1 className="text-2xl font-bold text-center mb-6">Edit Data Menu</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Makanan">
                            Makanan
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="makanan"
                            type="makanan"
                            name="makanan"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Masukan menu makanan anda"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Minuman">
                            paket
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="paket"
                            type="paket"
                            name="paket"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Masukan menu minuman anda"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="harga">
                            harga
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="harga"
                            type="harga"
                            name="harga"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="total harga"
                            required
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-sky-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Simpan
                        </button>
                        <div className="flex items-center justify-between">
                          <button className="bg-orange-400 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none">
                            <a href="/">kembali</a>
                          </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Editdata