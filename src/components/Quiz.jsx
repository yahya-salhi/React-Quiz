/* eslint-disable react/prop-types */
import Options from "./Options";
function Quiz({ quiz, dispatch, answer }) {
  console.log(quiz);
  return (
    <div>
      <h4>{quiz.question}</h4>
      <Options quiz={quiz} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Quiz;
