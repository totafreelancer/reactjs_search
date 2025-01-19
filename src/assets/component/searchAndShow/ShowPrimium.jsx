import React, { useState } from 'react';
import { AllCars } from '../cars/AllCars';

const ShowPrimium = () => {
  const [showPremiumOnly, setShowPremiumOnly] = useState(false)
  const filteredCars = showPremiumOnly ? AllCars.filter(car = car.isPremium) : AllCars;
  return (
    <div>
      <input type="checkbox" name="" id="premium-dilter" />
      <label>primium</label>
    </div>
  );
};

export default ShowPrimium;