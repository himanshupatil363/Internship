import React, { useState } from 'react'
const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    return (
        <div className="flex justify-between my-6">
            <div className="text-2xl flex-1 font-bold">FPO list</div>
            <div className="flex-1 flex justify-between items-center" >
                <span>
                <label htmlFor="sort">Sort by</label>
                <select id="sort" className="p-2 border-2 border-gray-300 ml-2 rounded-md">
                    <option value="All">All</option>
                    <option value="FPO Name">FPO Name</option>
                    <option value="Contact Person Name">Contact Person Name</option>
                    <option value="Location">Location</option>  
                </select>
                </span>
                <span>
                <input type="text" className="p-2 border-2 border-gray-300 rounded-md" placeholder="Search" onChange={e => setSearchQuery(e.target.value)}/>
                {<p className="absolute bg-green-100">{searchQuery}</p>}
                </span>
                <button className="bg-green-500 text-white py-2 px-4 rounded-md">Add FPO</button>
            </div>
        </div>
    )
}

export default Navbar
