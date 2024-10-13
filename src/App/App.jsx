import { useState } from "react";
import data from "../data/data.json";
import CreateCard from "../Components/CreateCard/CreateCard";
import style from "./App.module.scss";

function App() {
  return (
    <div className={style.container}>
      <h1>Главные матчи недели</h1>
      <div className={style["container_card"]}>
        <CreateCard item={data} />
      </div>
    </div>
  );
}

export default App;
