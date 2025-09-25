import React from 'react'
import { Table } from 'react-bootstrap'

function Tabeltailwind() {

    const data2 = [
        { id: 1, nama_lengkap: "Narendrasakti", nama_belakang: "widhitama", username: "SAP"},
        { id: 2, nama_lengkap: "rezakevala", nama_belakang: "arianto", username: "ryutee"},
        { id: 3, nama_lengkap: "Adreansyahputra", nama_belakang: "syahputra", username: "Rean"},   
    ]
    return (
        <>
        <div className="tabel">
        <h5>
            Tabel1
        </h5>
        <div className='flex flex-row'>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th class="border border-gray-300 ...">#</th>
                    <th class="border border-gray-300 ...">fullname</th>
                    <th class="border border-gray-300 ...">lastname</th>
                    <th class="border border-gray-300 ...">username</th>
                </tr>

                
            </thead>
            <tbody>
                {data2.map((item) => (
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.nama_lengkap}</td>
                        <td>{item.nama_belakang}</td>
                        <td>{item.username}</td>
                    </tr>
                    ))}
            </tbody>
        </Table>

       <div className='-mt-8'>
        <h5>
            Tabel2
        </h5>
       </div>
        <Table>
            <thead>
                <tr>
                    <th class="border border-gray-300 ...">#</th>
                    <th class="border border-gray-300 ...">fullname</th>
                    <th class="border border-gray-300 ...">lastname</th>
                    <th class="border border-gray-300 ...">username</th>
                </tr>

                
            </thead>
            <tbody>
                {data2.map((item) => (
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.nama_lengkap}</td>
                        <td>{item.nama_belakang}</td>
                        <td>{item.username}</td>
                    </tr>
                    ))}
            </tbody>
        </Table>

        <div className='-mt-8'>
        <h5>
            Tabel3
        </h5>
        </div>
        <Table>
            <thead>
                <tr>
                    <th class="border border-gray-300 ...">#</th>
                    <th class="border border-gray-300 ...">fullname</th>
                    <th class="border border-gray-300 ...">lastname</th>
                    <th class="border border-gray-300 ...">username</th>
                </tr>

                
            </thead>
            <tbody>
                {data2.map((item) => (
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.nama_lengkap}</td>
                        <td>{item.nama_belakang}</td>
                        <td>{item.username}</td>
                    </tr>
                    ))}
            </tbody>
        </Table>
</div>

<h5>tabel4</h5>
<div className="flex flex-row">
            <Table>
            <thead>
                <tr>
                    <th class="border border-gray-300 ...">#</th>
                    <th class="border border-gray-300 ...">fullname</th>
                    <th class="border border-gray-300 ...">lastname</th>
                    <th class="border border-gray-300 ...">username</th>
                </tr>
   
            </thead>
            <tbody>
                {data2.map((item) => (
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.nama_lengkap}</td>
                        <td>{item.nama_belakang}</td>
                        <td>{item.username}</td>
                    </tr>
                    ))}
            </tbody>
        </Table>
        
        <Table> 
            <thead>
                <tr>
                    <th class="border border-gray-300 ...">#</th>
                    <th class="border border-gray-300 ...">fullname</th>
                    <th class="border border-gray-300 ...">lastname</th>
                    <th class="border border-gray-300 ...">username</th>
                </tr>
            </thead>
            <tbody>
                {data2.map((item) => (
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.nama_lengkap}</td>
                        <td>{item.nama_belakang}</td>
                        <td>{item.username}</td>
                    </tr>
                    ))}
            </tbody>
        </Table>
        </div>
        </div>
    </>
    )
}


export default Tabeltailwind
