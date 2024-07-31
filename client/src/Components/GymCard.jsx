
import React, { useState } from 'react';

export default function GymCard()
{
    const [startDate, setStartDate] = useState('2024-07-31');
    const handleDateChange = (event) => {
        setStartDate(event.target.value);
    }
    return(
        <div className="max-w-5xl p-6 bg-white shadow-md rounded-lg z-10">
        <h2 className="text-2xl font-semibold mb-6">Membership</h2>
        <form className="grid  gap-6  grid-cols-2">
            <div className="col-span-1">
                <label htmlFor="memb" className="block text-gray-700">Package</label>
                <select id="memb" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm ">
                    <option>Gym</option>
                    <option>Indoor </option>
                    <option>Gym & Indoor </option>
                </select>
            </div>
            <div className="col-span-1">
                <label htmlFor="start date" className="block text-gray-700">Start Date</label>
                <input type="date" id="dates" value={startDate} onChange={handleDateChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm "/>
            </div>
            <div className="col-span-1">
                <label htmlFor="Package" className="block text-gray-700">Adults</label>
                <select id="Package" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm ">
                    <option>1Monthly</option>
                    <option>Quaterly</option>
                    <option>Semi-anually </option>
                    <option>Anually</option>
                </select>
            </div>
            <span className="text-4xl text-left mt-1 p-2 font-bold  text-black"> &#8377; </span>

        </form>
        <div className="flex justify-center items-center ">
            <button  className="mt-6 border-2 my-3 rounded-md hover:bg-black hover:text-white duration-150 text-black border-black py-1 px-2">Book</button>
        </div>
      </div>
    )
}