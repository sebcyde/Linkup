import React, { useState, useEffect } from "react";
import TopNavbar from "../../components/Global/TopNavbar";
import axios from "axios";

const People = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://api.jikan.moe/v4/top/people`);
      setData(response.data);
      setLoading(false);
      console.log("api call", response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        ""
      ) : (
        <div className="people">
          <TopNavbar />
          <h1 className="title">
            Meet the Talented Minds Behind Your Favorite Anime: The People of
            the Industry
          </h1>
          <p className="title-text">
            Explore the People Who Bring Your Favorite Anime to Life: Meet the
            Talented Minds of the Industry! Get insider insights, exclusive
            interviews and biographies of the animators, voice actors and
            production team behind your favorite series.
          </p>
          <div className="page-divide">
            <div className="top-people-anime">
              <h2 className="people-title">Decorated invidiuals in Anime</h2>
              <ul className="person-list">
              {data.data.map((person, index) => (
                    <li key={person.mal_id} className='person-card'>
                    <img className="person-img" src={person.images.jpg.image_url} alt="" />
                     <div className="info">
                     <p>Rank: {index + 1}</p>
                    <h4>Name: {person.name}</h4>
                    <p>Family Name: {person.family_name}</p>
                    <p>Birthday: {person.birthday.split(0,3).join(' ')}</p>
                     </div>
                    </li>
                ))}
              </ul>
            </div>
            <div></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default People;
