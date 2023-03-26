
import React, { useState, useEffect } from "react";
import axios from "axios";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { blue } from "@mui/material/colors";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import Rating from "@mui/material/Rating";

export default function LeftSide() {
  const [Loading, setLoading] = useState(true);
  const [newload, setNewLoad] = useState(false);
  const [data, setData] = useState();

  const fetchData = async () => {
    try {
      const response = await axios.get("https://api.jikan.moe/v4/top/anime");
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

  const openNew = async () => {
    console.log("clicking here");
    setNewLoad(true);
  };

  const close = async () => {
    setNewLoad(false);
  };

  return (
    <div className="leftSide-wrapper">
      <h1 className="header">Top Anime</h1>
      <div className="line-thru"></div>
      <div className="anime-list-wrapper">
        {Loading
          ? ""
          : data.data.slice(0, 3).map((anime) => (
              <div className="anime-card" key={anime.title}>
                <h3 className="anime-header">{anime.title_english}</h3>
                <img
                  className="anime-img"
                  src={anime.images.jpg.image_url}
                  alt=""
                />
                <div className="anime-details">
                  <Rating
                    name="half-rating-read"
                    className="stars"
                    defaultValue={anime.score / 2}
                    precision={0.1}
                    readOnly
                  />
                 <p>
                 </p>
                  <p className="anime-text">
                    {anime.synopsis.substring(0, 76)}...
                  </p>
                </div>
              </div>
            ))}
      </div>
      {newload ? (
        <div className="anime-list-wrapper">
          {data.data.slice(3, 6).map((anime) => (
            <div className="anime-card" key={anime.title}>
              <h3 className="anime-header">{anime.title_english}</h3>
              <img
                className="anime-img"
                src={anime.images.jpg.image_url}
                alt=""
              />
              <div className="anime-details">
                <Rating
                  name="half-rating-read"
                  className="stars"
                  defaultValue={anime.score / 2}
                  precision={0.1}
                  readOnly
                />
                <p className="anime-text">
                  {anime.synopsis.substring(0, 76)}...
                </p>
              </div>
            </div>
          ))}
          <button onClick={close} className="arrow">
            <KeyboardDoubleArrowUpIcon fontSize="large" />
          </button>
        </div>
      ) : (
        <button onClick={openNew} className="arrow">
          <KeyboardDoubleArrowDownIcon fontSize="large" />
        </button>
      )}
    </div>
  );

}
