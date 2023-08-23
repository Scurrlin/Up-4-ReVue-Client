import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Album() {
  const serverUrl = import.meta.env.VITE_SERVER_URL;
  const baseUrl = `${import.meta.env.VITE_SERVER_URL}/api/albums`;
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");


  useEffect(() => {
    const fetchData = async () => {
      try {

        let url = baseUrl;
        if(selectedCategory) {
          url += `?category=${selectedCategory}`
        }

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Failed to fetch data.");
        }

        const jsonData = await response.json();
        setData(jsonData);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setError("Error fetching data. Please try again later.");
        setIsLoading(false);
      }
    };
    fetchData();
  }, [selectedCategory]);

  return (
    <div>
      <h1>Albums</h1>
      <p>
        Below are reviews of some of my favorite albums. If you want to add your own review of an album, all you need is a picture and an opinion!
      </p>

      <Link to="/createalbum">+ Add New Album</Link>

      <h2>Fetch Example</h2>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}


      <div className="filters">
        <label>Categories</label>
        <select onChange={(e)=> setSelectedCategory(e.target.value)}>
          <option value="">All</option>
          <option value="alt pop">Alt Pop</option>
          <option value="pop">Pop</option>
          <option value="country">Country</option>
          <option value="classical">Classical</option>
          <option value="edm">EDM</option>
          <option value="folk">Folk</option>
          <option value="jazz">Jazz</option>
          <option value="r&b">R&B</option>
          <option value="rap">Rap</option>
          <option value="polyphia">Polyphia</option>
          <option value="rock">Rock</option>
          <option value="metal">Metal</option>
          <option value="k pop">K Pop</option>
          <option value="other">Other</option>
        </select>
      </div>



      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ul className="albums">
          {data.map((item) => (
            <li key={item._id}>
              <Link to={`/albums/${item.slug}`}>
                <img
                  src={`${serverUrl}/uploads/${item.thumbnail}`}
                  alt={item.title}
                />
                <h3>{item.title}</h3>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Album;