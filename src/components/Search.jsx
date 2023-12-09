import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState([]);

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (searchText.trim() !== "") {
          const response = await axios.get(
            "https://api.themoviedb.org/3/search/movie",
            {
              params: {
                api_key: "11cedbb1d6d79381b452e2fdec102159",
                query: searchText,
              },
            }
          );
          if (response.status !== 200) {
            throw new Error("Could not fetch");
          }
          setData(response.data.results);
        }
      } catch (err) {
        console.log(err.message);
      }
    };

    const debounceFunc = setTimeout(() => {
      fetchData();
    }, 500);

    return () => clearTimeout(debounceFunc);
  }, [searchText]);

  return (
    <div>
      <div>
        <input
          type="search"
          placeholder="Search something..."
          className="w-40 border px-3 py-2"
          onChange={handleSearch}
          value={searchText}
        />
      </div>
      <main>
        {data && data.length > 0 ? (
          <div className="grid grid-cols-4">
            {data.map((movie) => (
              <div key={movie.id}>
                {movie.original_title}
                <img
                  src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.backdrop_path}`}
                  alt=""
                />
              </div>
            ))}
          </div>
        ) : (
          <p>No results found.</p>
        )}
      </main>
    </div>
  );
};

export default Search;
