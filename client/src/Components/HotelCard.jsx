import React, { useState } from 'react';



export default function HotelCard()
{
    const [startDate, setStartDate] = useState('2024-07-31');
    const handleDateChange = (event) => {
        setStartDate(event.target.value);
    }
    return(<div className="max-w-5xl p-6 bg-white shadow-md rounded-lg z-10">
        <h2 className="text-2xl font-semibold mb-6">Book a Room</h2>
        <form className="grid  gap-6  grid-cols-3">
            <div className="col-span-1">
                <label htmlFor="ac" className="block text-gray-700">A/C or Non A/C</label>
                <select id="ac" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm ">
                    <option>A/C</option>
                    <option>Non A/C</option>
                </select>
            </div>
            <div className="col-span-1">
                <label htmlFor="start date" className="block text-gray-700">Start Date</label>
                <input type="date" id="dates" value={startDate} onChange={handleDateChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm "/>
            </div>
            <div className="col-span-1 ">
                <label htmlFor="end dats" className="block text-gray-700">End date</label>
                <input type="date" id="end dats" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"/>
            </div>
            <div className="col-span-1">
                <label htmlFor="adult" className="block text-gray-700">Adults</label>
                <select id="adult" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm ">
                    <option>1 Adult</option>
                    <option>2 Adults</option>
                    <option>3 Adults</option>
                    <option>4 Adults</option>
                </select>
            </div>
            <div className="col-span-1">
                <label htmlFor="child" className="block text-gray-700">Children</label>
                <select id="child" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm ">
                    <option>0</option>
                    <option>1 Child</option>
                    <option>2 Children</option>
                    <option>3 Children</option>
                </select>
            </div>
            <span className="text-4xl text-left mt-1 p-2 font-bold  text-black"> &#8377; </span>
        </form>
        <div className="flex justify-center items-center">
            <button  className="mt-6 border-2 my-3 rounded-md hover:bg-black hover:text-white duration-150 text-black border-black py-1 px-2">Book</button>
        </div>
      </div>
    );
  }