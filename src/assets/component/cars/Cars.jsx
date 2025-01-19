import React from 'react';
import Car from './car/Car';

const Cars = ({AllCars, searchTerm}) => {
  console.log(searchTerm)
  const rows = [];
    AllCars.forEach((cars) => {
      if (cars.title.toLowerCase().indexOf(searchTerm.toLowerCase()) === -1){
        return;
      }
      rows.push(<Car key={cars.id} cars={cars} />)
    })
  return (
    <ul className='grid grid-cols-3'>
      {rows}
    </ul>
  );
};

export default Cars;