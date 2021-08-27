import React from "react";

import styles from "./Views.module.css";

const HomeView = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>
      Приветственная страница нашего сервиса{" "}
      <span role="img" aria-label="Иконка приветствия">
        💁‍♀️
      </span>
    </h1>
  </div>
);

export default HomeView;
