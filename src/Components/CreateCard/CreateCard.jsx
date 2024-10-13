import React from "react";
import CreateBox from "../CreateBox/CreateBox";

function CreateCard({ item }) {
  const countries = item.countries;
  const events = item.events;
  const tournaments = item.tournaments;

  const arrTournaments = [];
  for (let i = 1; i < 5; i++) {
    const tournamentsId = i;
    const obj = {};
    obj.id = tournamentsId;
    tournaments.forEach((e) => {
      if (e.tournament_id === tournamentsId) {
        const nametournament = e.name;
        const location = e.location;
        const prizeMoney = e.prize_money;
        const team1 = e.teams[0].name;
        const team2 = e.teams[1].name;
        obj.name = nametournament;
        obj.location = location;
        obj.prizeMoney = prizeMoney;
        obj.team1 = team1;
        obj.team2 = team2;
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
    const continent = e.continent;
    const name = e.name;
    const population = e.population;
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
