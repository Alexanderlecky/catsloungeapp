import React, { useEffect, useState } from 'react';
import { getRandomCatFact } from '../utils/api';

function FactOfTheDay() {
  const [fact, setFact] = useState(null);

  useEffect(() => {
    getRandomCatFact().then(setFact);
  }, []);

  return (
    <div>
      <h1>Cat Fact of the Day</h1>
      {fact ? <p>{fact.text}</p> : <p>Loading...</p>}
    </div>
  );
}

export default FactOfTheDay;
