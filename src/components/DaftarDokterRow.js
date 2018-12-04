import React from 'react';

export const DaftarDokterRow = (props) => {
    return (
        <tbody>
            {props.listDokter.map(dokter => {
                return (
                    <tr key={dokter.id}>
                        <td>{dokter.nama}</td>
                    </tr>
                )
            })}
        </tbody>
    )
}