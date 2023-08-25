import React, { useState } from 'react';
import { searchPairs } from '../api';

const TokenSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleTokenSearch = async () => {
    try {
      const response = await searchPairs(searchQuery);
      setSearchResults(response.pairs); // Make sure the response object has a 'pairs' property
    } catch (error) {
      console.error('Error searching pairs:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleTokenSearch}>Search</button>

      <div>
        <h2>Search Results:</h2>
        <ul>
          {searchResults.map((result) => (
            <li key={result.pairAddress}>
              {/* Display the relevant information */}
              {result.baseToken.symbol}/{result.quoteToken.symbol}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TokenSearch;
