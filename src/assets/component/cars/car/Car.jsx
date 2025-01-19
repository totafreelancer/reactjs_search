import React from 'react';

const Car = ({cars}) => {
  return (
    <li className='m-3 shadow-lg '>
      <h2 className='text-gray-950 text-xl'>Cars Name: <span className='text-gray-500'>{cars.title}</span></h2>
      <p className='text-gray-950 text-lg'>Brand: <span className='text-gray-500'>{cars.brand}</span></p>
      <p className='text-gray-950 text-lg'>Year: <span className='text-gray-500'>{cars.year}</span></p>
      <p className='text-gray-950 text-lg'>Price: <span className='text-gray-500'>{cars.price}</span></p>
      <p className='text-gray-950 text-sm'>Premium: <span className={`text-gray-500 ${cars.isPremium? 'text-yellow-500':'text-gray-500'}`}>{cars.isPremium ? "Yes" : "No"}</span></p>
    </li>
  );
};

export default Car;