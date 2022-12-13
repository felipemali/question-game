import React, { useContext, useEffect, useState } from "react";
import { Option } from "../api/question";
import { Question, QuestionContext } from "../provider/game";

export const data: Question[] = [
  {
    ask: "qual a quantidade da população do Brasil?",
    options: [
      {
        option: "A",
        title: 70.0,
        isCorrect: false,
      },
      {
        option: "B",
        title: 130.0,
        isCorrect: false,
      },
      {
        option: "C",
        title: 210.0,
        isCorrect: true,
      },
    ],
  },
  {
    ask: "De quem é a famosa frase 'Penso, logo existo'?",
    options: [
      {
        option: "A",
        title: "Platão",
        isCorrect: false,
      },
      {
        option: "B",
        title: "Galileu Galilei",
        isCorrect: false,
      },
      {
        option: "C",
        title: "Descartes",
        isCorrect: true,
      },
    ],
  },
  {
    ask: "De onde é a invenção do chuveiro elétrico?",
    options: [
      {
        option: "A",
        title: "França",
        isCorrect: false,
      },
      {
        option: "B",
        title: "Inglaterra",
        isCorrect: false,
      },
      {
        option: "C",
        title: "Brasil",
        isCorrect: true,
      },
    ],
  },
  {
    ask: "O que a palavra legend significa em português?",
    options: [
      {
        option: "A",
        title: "legenda",
        isCorrect: true,
      },
      {
        option: "B",
        title: "lenda",
        isCorrect: false,
      },
      { option: "C", title: "legendar", isCorrect: false },
    ],
  },
];

export const questionGenerator = () => {
  const random = Math.floor(Math.random() * data?.length);
  return data[random];
};
