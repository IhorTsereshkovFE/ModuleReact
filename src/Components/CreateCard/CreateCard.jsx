import React from "react";
import CreateBox from "../CreateBox/CreateBox";

function CreateCard({ item }) {
  const { countries, events, tournaments } = item;

  const arrTournaments = [];
  for (let i = 1; i < 5; i++) {
    const tournamentsId = i;
    const obj = {};
    obj.id = tournamentsId;
    tournaments.forEach((e) => {
      if (e.tournament_id === tournamentsId) {
        obj.name = e.name;
        obj.location = e.location;
        obj.prizeMoney = e.prize_money;
        obj.team1 = e.teams[0].name;
        obj.team2 = e.teams[1].name;
      }
    });

    arrTournaments.push(obj);
  }

  events.forEach((e, index) => {
    const tournamentsId = e.tournament_id;
    const item = e;
    arrTournaments.forEach((e) => {
      if (e.id === tournamentsId) {
        const event = `event${index}`;
        e[event] = item;
      }
    });
  });

  countries.forEach((e, index) => {
    const tournamentsId = e.country_id;
    const { continent, name, population } = e;
    arrTournaments.forEach((e) => {
      if (e.id === tournamentsId) {
        e.continent = continent;
        e.nameCountry = name;
        e.population = population;
      }
    });
  });

  return <CreateBox item={arrTournaments} />;
}

export default CreateCard;
