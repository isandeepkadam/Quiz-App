import { questionsInterface } from '../Data/Categories';
import { useEffect, useState } from 'react';
import { Typography, CircularProgress, Paper, Box } from '@mui/material';
import { Question } from '../components';

const Quiz: React.FunctionComponent<{
  name: string;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  questions: questionsInterface[];
  setQuestions: React.Dispatch<React.SetStateAction<questionsInterface[]>>;
}> = ({ name, score, setScore, questions, setQuestions }) => {
  const [options, setOptions] = useState<string[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    setOptions(
      questions.length > 0
        ? handleShuffle([
            questions[currentQuestion]?.correct_answer,
            ...questions[currentQuestion]?.incorrect_answers,
          ])
        : []
    );
  }, [questions, currentQuestion]);

  console.log(options);
  const handleShuffle = (arrayOptions: string[]) => {
    return arrayOptions.sort(() => Math.random() - 0.5);
  };
  return (
    <Paper
      sx={{
        background: 'inherit',
        height: '83vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
      }}
    >
      <Box
        sx={{
          width: '100vw',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}
      >
        <Typography>
          {questions.length > 0 && questions[currentQuestion].category}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontWeight: '200',
            width: 'max-content',
            p: 1,
            background: '#151515',
            boxShadow: '3px 5px #FFC727',
            border: '1px solid gray',
          }}
        >
          Welcome, {name}
        </Typography>
        <Typography> Score: {score}</Typography>
      </Box>
      {questions.length > 0 ? (
        <Box sx={{ height: '70vh', width: '90vw' }}>
          <Question
            cuurentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
            questions={questions}
            options={options}
            correct={questions[currentQuestion]?.correct_answer}
            score={score}
            setScore={setScore}
          />
        </Box>
      ) : (
        <CircularProgress size={100} />
      )}
    </Paper>
  );
};

export default Quiz;
