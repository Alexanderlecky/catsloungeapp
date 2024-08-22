import axios from 'axios';

const CAT_FACTS_URL = 'https://cat-fact.herokuapp.com/facts';
const CAT_FACTS_RANDOM_URL = 'https://cat-fact.herokuapp.com/facts/random';
const CAT_IMAGES_URL = 'https://api.thecatapi.com/v1/images/search';

export const getCatFacts = async () => {
  try {
    const response = await axios.get(CAT_FACTS_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching cat facts:", error);
    throw error;
  }
};

export const getRandomCatFact = async () => {
  try {
    const response = await axios.get(CAT_FACTS_RANDOM_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching random cat fact:", error);
    throw error;
  }
};

export const getCatImages = async () => {
  try {
    const response = await axios.get(CAT_IMAGES_URL, { params: { limit: 10 } });
    return response.data;
  } catch (error) {
    console.error("Error fetching cat images:", error);
    throw error;
  }
};
