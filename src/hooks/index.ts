import { useContext } from "react";
import { QuestionContext, QuestionContextProps } from "../provider/game";
//hooks são usados apenas em estados ou componentes

export const useQuestions = () => {
  const context = useContext(QuestionContext);

  if (context) {
    return context;
  }

  throw new Error("Context is not defined.");
};
