import React, { useState } from 'react';



export default function AuditCard()
{
    const [startDate, setStartDate] = useState('2024-07-31');
    const handleDateChange = (event) => {
        setStartDate(event.target.value);
    }
    return(<div className="max-w-5xl p-6 bg-white shadow-md rounded-lg z-10">
        <h2 className="text-2xl font-semibold mb-6">Book Auditorium</h2>
        <form className="grid  gap-6  grid-cols-2">
            <div className="col-span-1">
                <label htmlFor="door" className="block text-gray-700">Indoor or Outdoor</label>
                <select id="door" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm ">
                    <option>Indoor</option>
                    <option>Outdoor</option>
                </select>
            </div>
            <div className="col-span-1">
                <label htmlFor="datee" className="block text-gray-700">Date</label>
                <input type="date" id="datee" value={startDate} onChange={handleDateChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm "/>
            </div>
            <div className="col-span-1">
                <label htmlFor="tim" className="block text-gray-700">Time</label>
                <select id="tim" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm ">
                    <option>Morning</option>
                    <option>Afternoon</option>
                    <option>Evening</option>
                </select>
            </div>
            <div className="col-span-1">
                <label htmlFor="food" className="block text-gray-700">Food Services</label>
                <select id="food" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm ">
                    <option>Yes</option>
                    <option>No</option>
                </select>
            </div>
            <span className="text-4xl text-left mt-1 p-2 font-bold  text-black"> &#8377; </span>
        </form>
        <div className="flex justify-center items-center">
            <button  className="mt-8 border-2 my-3 rounded-md hover:bg-black hover:text-white duration-150 text-black border-black py-1 px-2">Book</button>
        </div>
      </div>
    );
  }