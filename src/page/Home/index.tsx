import React from "react";
import Game from "../Game";
import QuestionProvider from "../../provider/game";

const Home = () => {
  return (
    <div>
      <QuestionProvider>
        <Game />
      </QuestionProvider>
    </div>
  );
};

export default Home;
