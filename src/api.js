import axios from 'axios';

const API_BASE_URL = 'https://api.dexscreener.com/latest';

export const fetchPairsByTokenAddresses = async (tokenAddresses) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/dex/tokens/${tokenAddresses.join(',')}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const searchPairs = async (query) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/dex/search/?q=${query}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
