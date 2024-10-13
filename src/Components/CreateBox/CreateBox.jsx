import React from "react";
import Events from "../Events/Events";
import createCard from "../../Components/CreateCard/createCard.module.scss";

function CreateBox({ item }) {
  return item.map((item, index) => {
    const nametournament = item.name;
    const continent = item.continent;
    const location = item.location;
    const nameCountry = item.nameCountry;
    const population = item.population;
    const prizeMoney = item.prizeMoney;
    const team1 = item.team1;
    const team2 = item.team2;
    let time;
    const arrEvent = [];

    for (const key in item) {
      if (key.includes("event")) {
        time = item[key].match_time;
        arrEvent.push(item[key]);
      }
    }

    const timeDate = time.slice(0, 10).replace(/-/g, ".");
    const timeT = time.slice(11, 16);

    return (
      <div className={createCard.cardBox} key={index}>
        <p className={createCard.nametournament}>{nametournament}</p>
        <p className={createCard.location}>
          {continent}, {nameCountry} (население: {population}) Стадион:{" "}
          {location}
        </p>
        <p className={createCard.time}>
          {timeDate} {timeT}
        </p>
        <p className={createCard.prizeMoney}>Призовой фонд: {prizeMoney}</p>
        <div className={createCard.team}>
          <p className={createCard.team1}>{team1} </p>
          <p className={createCard.dot}> : </p>
          <p className={createCard.team1}> {team2}</p>
        </div>
        <p className={createCard.eventsTitle}>События матча</p>
        <Events item={arrEvent} team1={team1} team2={team2} />
      </div>
    );
  });
}

export default CreateBox;
