import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function TabelData() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("http://localhost:5000/menu");
                setData(res.data);
            } catch (err) {
                console.error("gagal mengambil data:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleDelete = async (id) => {
        const konfirmasi = window.confirm("yakin ingin menghapus data ini?");
        if (!konfirmasi) return;

        try {
            await axios.delete(`http://localhost:5000/menu/${id}`);
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }
            });
            navigate("/Tabeldata");
            setData(data.filter((item) => item.id !== id));
        } catch (err) {
            console.error("Gagal menghapus data:", err);
            alert("Gagal menghapus data");
        }
    };

    return (
        <>
            <table className="border-separate border border-gray-400 w-250 m-50 mx-75">
                <thead>
                    <tr>
                        <th className="border border-gray-300">No</th>
                        <th className="border border-gray-300">Makanan</th>
                        <th className="border border-gray-300">Paket</th>
                        <th className="border border-gray-300">Harga</th>
                        <th className="border border-gray-300">Aksi</th>
                    </tr>
                </thead>

                <tbody>
                    {data.length > 0 ? (data.map((item, index) => (
                        <tr key={item.id}>
                            <td className="border border-gray-300">{index + 1}</td>
                            <td className="border border-gray-300">{item.makanan}</td>
                            <td className="border border-gray-300">{item.paket}</td>
                            <td className="border border-gray-300">{item.harga}</td>
                                <button
                                    onClick={() => navigate(`/Editdata/${item.id }`)}
                                    className="bg-gray-700 text-white px-3 py-1 rounded-md hover:bg-gray-500"
                                >
                                    editt
                                </button>
                                <button
                                    className="bg-red-500 text-white px-2 py-1 rounded"
                                    onClick={() => handleDelete(item.id)}
                                >
                                    Hapus
                                </button>
                        </tr>
                    ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="text-center">
                                Tidak ada data
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
}
export default TabelData;