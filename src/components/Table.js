import React from 'react'
import edit from '../assets/edit.svg'
import view from '../assets/view.svg'
import pic from '../assets/passport.jpg'
const Table = ({data}) => {
    return (
        <table className="">
            <thead className="bg-green-500 text-white">
                <tr>
                    <th className="py-4 rounded-l-md">FPO Name</th>
                    <th>Contact Person Name</th>
                    <th>Location</th>
                    <th>Members</th>
                    <th>BOD</th>
                    <th>Staffs</th>
                    <th className="rounded-r-md">Action</th>
                </tr>
            </thead>
            <tbody>
            {
                data.map(entity => (
                    <tr key={entity._id} className="bg-white text-center bg-gray-100">
                        
                        <td className="">
                            <p className="py-3 bg-white py-4">{entity.fpoName}</p>
                        </td>
                        <td>
                            <p className="bg-white flex justify-center items-center py-2"><img className="h-10 mr-10 rounded-full" src={pic} alt=""/>{entity.personName}</p>
                        </td>
                        <td>
                            <p className="py-3 bg-white py-4">{entity.location}</p>
                        </td>
                        <td>
                            <p className="py-3 bg-white py-4">{entity.members}</p>
                        </td>
                        <td>
                            <p className="py-3 bg-white py-4">{entity.bod}</p>
                        </td>
                        <td>
                            <p className="py-3 bg-white py-4">{entity.staffs}</p>
                        </td>

                        {/*image will be imported on the basis of structure of json data i have taken static images*/}
                        <td className="flex py-3 bg-white py-4 justify-around">
                            <img src={view} className="h-6 opacity-50" alt=""/>
                            <img src={edit} className="h-5 opacity-50" alt=""/>
                        </td>
                   </tr>
                ))
            }
            </tbody>
        </table>
    )
}

export default Table
