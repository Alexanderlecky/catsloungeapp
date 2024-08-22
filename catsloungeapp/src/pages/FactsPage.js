import React, { useEffect, useState } from 'react';
import { getCatFacts } from '../utils/api'; // Adjust the import path as needed
import FactsList from '../components/FactsList';

function FactsPage() {
  const [facts, setFacts] = useState([]);

  useEffect(() => {
    async function fetchFacts() {
      try {
        const data = await getCatFacts();
        setFacts(data.all); // Adjust based on actual API response structure
      } catch (error) {
        console.error('Error fetching facts:', error);
      }
    }

    fetchFacts();
  }, []);

  return (
    <div>
      <h1>Cat Facts</h1>
      <FactsList facts={facts} />
    </div>
  );
}

export default FactsPage;
