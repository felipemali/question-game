import React, { createContext, useEffect, useState } from "react";
import { Option } from "../api/question";
import { questionGenerator } from "../helpers/generatorQuestion";

type ProviderProps = {
  children: React.ReactNode;
};

export type Question = {
  ask: string;
  options: Option[];
  // life: number
  // awserd: [
  // ]
};

export type QuestionContextProps = {
  questions: Question[];
  addQuestion: (question: Question) => boolean;
  generateQuestion: () => void;
  generatedQuestion?: Question;
};

export const QuestionContext = createContext<QuestionContextProps | null>(null);

const QuestionProvider = ({ children }: ProviderProps) => {
  const [questions, setQuestions] = useState<Question[]>(
    JSON.parse(localStorage.getItem("questions") || "[]")
  ); //carregar com o que tem no local storage --> dps vai alterar para API
  const [generatedQuestion, setGeneratedQuestion] = useState<Question>();

  const addQuestion = (question: Question) => {
    if (questions.some((current) => current.ask === question.ask)) {
      return false;
    }

    localStorage.setItem("questions", JSON.stringify([...questions, question]));

    setQuestions([...questions, question]);
    return true;
  };

  const generateQuestion = () => {
    const newQuestion = questionGenerator();
    setQuestions([...questions, newQuestion]);
    setGeneratedQuestion(newQuestion);
  };

  const values: QuestionContextProps = {
    questions,
    addQuestion,
    generateQuestion,
    generatedQuestion,
  };

  return (
    <QuestionContext.Provider value={values}>
      {children}
    </QuestionContext.Provider>
  );
};
export default QuestionProvider;
