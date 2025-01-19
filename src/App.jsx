import React, { useState } from 'react';
import Header from './assets/component/header/Header';
import Search_Show from './assets/component/searchAndShow/Search_Show';
import Cars from './assets/component/cars/Cars';
import { AllCars } from './assets/component/cars/AllCars';

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <Header />
      <Search_Show searchTerm={searchTerm} onSearchTerm={setSearchTerm} />
      <Cars AllCars={AllCars} searchTerm={searchTerm} />
    </>
  );
};

export default App;