import React, { useState, useEffect } from "react";

export type Option = {
  option: string;
  title: string | number;
  isCorrect: boolean;
};

export interface Random {
  question?: string;
  options: Option[];
}

export const getQuestions = () => {
  const [questions, setQuestions] = useState<Random[]>([]);

  return questions;
};
