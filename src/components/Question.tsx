import { questionsInterface } from '../Data/Categories';
import { useState } from 'react';
import { Box, Grid, Typography, Paper, Button } from '@mui/material';
import './question.css';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router';
import { isGeneratorFunction } from 'util/types';

const StyledButton = styled(Button)({
  width: '15%',
  cursor: 'pointer',
  color: 'black',
  background: '#FFC727',
  height: '60px',
  fontSize: 16,
  '&:hover': {
    backgroundColor: '#FFC727',
  },
});

const Question: React.FunctionComponent<{
  cuurentQuestion: number;
  setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>;
  questions: questionsInterface[];
  options: string[];
  correct: string;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
}> = ({
  cuurentQuestion,
  setCurrentQuestion,
  questions,
  options,
  correct,
  score,
  setScore,
}) => {
  const [selected, setSelected] = useState<string>('');
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSelect = (option: string) => {
    if (selected === option && selected === correct) {
      return 'select';
    } else if (selected === option && selected !== correct) {
      return 'wrong';
    } else if (option === correct) {
      return 'select';
    }
  };

  const handleCheck = (option: string) => {
    setSelected(option);
    if (option === correct) setScore(score + 1);
    setError(false);
  };

  const handleQuit = () => {};

  const handleNext = () => {
    if (cuurentQuestion > 8) {
      navigate('/result');
    } else if (selected) {
      setCurrentQuestion(cuurentQuestion + 1);
      setSelected('');
    } else {
      alert('please select option first');
    }
  };

  return (
    <Paper sx={{ height: '100%', background: '#202020' }}>
      <Typography
        variant="h3"
        sx={{
          fontWeight: '200',
          padding: '10px',
          borderLeft: '3px solid #FFC727',
        }}
      >
        Question: {cuurentQuestion + 1}
      </Typography>

      <Typography
        variant="h5"
        sx={{
          p: { xs: '5px', md: '10px' },
          fontSize: { xs: '15px', lg: '20px' },
        }}
      >
        {questions.length > 0 && questions[cuurentQuestion].question}
      </Typography>

      <Grid container sx={{ background: 'transparent' }}>
        {options &&
          options.map((option) => (
            <Grid item xs={12} lg={6} md={6} sm={6}>
              <button
                onClick={() => {
                  handleCheck(option);
                }}
                className={`singleOption ${selected && handleSelect(option)}`}
                disabled={selected.length > 0}
              >
                <Typography
                  sx={{
                    color: 'black',
                    fontSize: 20,
                    textTransform: 'capitalize',
                    p: 1,
                  }}
                >
                  {option}
                </Typography>
              </button>
            </Grid>
          ))}
      </Grid>
      <Box
        sx={{
          mt: 10,
          height: 100,
          display: 'flex',
          justifyContent: 'space-between',
          padding: 5,
        }}
      >
        <StyledButton onClick={handleQuit}>Quit</StyledButton>

        <Button
          onClick={handleNext}
          variant="contained"
          sx={{
            width: '15%',
            height: '60px',
            cursor: 'pointer',
            color: '#fff',
          }}
        >
          Next Question
        </Button>
      </Box>
    </Paper>
  );
};

export default Question;
