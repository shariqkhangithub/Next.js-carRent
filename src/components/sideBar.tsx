import React from 'react'

const Sidebar = () => {
  return (
    <aside className=" hidden  sm:block  bg-white p-8  ">
    <h2 className="text-xl font-bold mb-4">Filters</h2>

    <div className="mb-6">
      <h3 className="font-semibold text-gray-700 mb-2">Type</h3>
      <ul className="space-y-2">
        {["Sport (10)", "SUV (12)", "MPV (16)", "Sedan (20)", "Coupe (14)", "Hatchback (14)"].map((type) => (
          <li key={type} className="flex items-center">
            <input
              type="checkbox"
              id={type}
              className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
            />
            <label htmlFor={type} className="ml-2 text-gray-700">
              {type}
            </label>
          </li>
        ))}
      </ul>
    </div>

    <div className="mb-6">
      <h3 className="font-semibold text-gray-700 mb-2">Capacity</h3>
      <ul className="space-y-2">
        {["2 Person (10)", "4 Person(14)", "6 Person(12)", "8 or More (16)"].map((capacity) => (
          <li key={capacity} className="flex items-center">
            <input
              type="checkbox"
              id={capacity}
              className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
            />
            <label htmlFor={capacity} className="ml-2 text-gray-700">
              {capacity}
            </label>
          </li>
        ))}
      </ul>
    </div>

    <div>
      <h3 className="font-semibold text-gray-700 mb-2">Price</h3>
      <div className="flex items-center space-x-2">
        <label htmlFor="price-range" className="text-gray-700">
          Max:
        </label>
        <input
          id="price-range"
          type="range"
          min="0"
          max="100"
          className=""
        />
      </div>
      <p className="text-sm text-gray-500 mt-2">Max: $100.00</p>
    </div>
  </aside>
  )
}

export default Sidebar