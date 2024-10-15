import React from "react";
import createCard from "../../Components/CreateCard/createCard.module.scss";

function Events({ item, team1, team2 }) {
  return item.map((e, index) => {
    const { minute, player } = e;

    let type = e.type;
    const teamE = e.team;
    let teamT;
    if (teamE === "home") {
      teamT = team1;
    } else {
      teamT = team2;
    }
    const assist = e.assist;
    let assistT;
    let assistText;
    if (assist) {
      assistText = "assist - ";
      assistT = assist;
    } else {
      assistT = "";
    }

    const reason = e.reason;
    let reasonT;
    if (reason) {
      reasonT = `(${reason})`;
    }

    return (
      <div key={index}>
        <div className={createCard.events}>
          <div className={createCard.eventsBox}>
            <p className={createCard.leftEvents}>{minute} минута:</p>
            <p className={createCard.rightEvents}>
              {type}
              {reasonT} - {player} ({teamT}) {assistText} {assistT}
            </p>
          </div>
        </div>
      </div>
    );
  });
}

export default Events;
