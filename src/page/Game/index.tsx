import React, { createContext, useContext, useEffect, useState } from "react";
import Content from "../../components/Content";
import QuestionProvider, { QuestionContext } from "../../provider/game";
import HeaderGame from "../../components/HeaderGame";
import Card from "../../components/Card";

import { useQuestions } from "../../hooks";

import { Option } from "../../api/question";
import { ArrowIcon } from "../../components/ArrowIcon";
import { Button } from "@mui/material";

const Game = () => {
  const { addQuestion, questions, generateQuestion } = useQuestions();
  const [optionSelected, setOptionSelected] = useState<Option | null>(null);
  return (
    <div>
      <HeaderGame />
      <Card optionSelected={optionSelected} onSelect={setOptionSelected} />
      <ArrowIcon
        generateQuestion={generateQuestion}
        setOptionSelected={setOptionSelected}
      />

      {/* <Content /> */}
    </div>
  );
};

export default Game;
