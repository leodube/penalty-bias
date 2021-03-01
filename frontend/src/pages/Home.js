import React, { useState, useEffect } from "react";
import {Games} from "../components";
import predictPenaltyService from "../services/predictPenaltyService";

const Home = () => {
  const [games, setGames] = useState(null);

  useEffect(() => {
    if (!games) {
      getGames();
    }
  });

  const getGames = async () => {
    let res = await predictPenaltyService.get();
    setGames(res);
  }

  return (
    <>
    {games ? (<Games props={games} />) : (<p>loading</p>)}
    </>
  );
};

export default Home;