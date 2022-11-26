import { questionsInterface } from '../Data/Categories';
import { useState } from 'react';
import {
  Box,
  Grid,
  Typography,
  Paper,
  Button,
  Snackbar,
  Alert,
} from '@mui/material';
import './question.css';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router';

// const StyledButton = styled(Button)({
//   maxWidth: '15%',
//   cursor: 'pointer',
//   color: 'black',
//   background: '#FFC727',
//   height: '60px',
//   fontSize: 16,
//   ':hover': {
//     background: '#FFC727',
//   },
// });

const Question: React.FunctionComponent<{
  cuurentQuestion: number;
  setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>;
  questions: questionsInterface[];
  options: string[];
  correct: string;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  setQuestions: React.Dispatch<React.SetStateAction<questionsInterface[]>>;
}> = ({
  cuurentQuestion,
  setCurrentQuestion,
  questions,
  options,
  correct,
  score,
  setScore,
  setQuestions,
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

  const handleQuit = () => {
    setScore(0);
    setQuestions([]);
    navigate('/');
  };

  const handleNext = () => {
    if (cuurentQuestion > 8) {
      navigate('/result');
    } else if (selected) {
      setCurrentQuestion(cuurentQuestion + 1);
      setSelected('');
    } else {
      setError(true);
    }
  };

  return (
    <Paper
      sx={{
        height: 'max-content',
        background: '#202020',
        paddingBottom: '30px',
      }}
    >
      <Snackbar
        open={error}
        sx={{ margin: '200px auto', width: { xs: '300px', md: '350px' } }}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        onClose={() => setError(false)}
      >
        <Alert
          severity="error"
          onClose={() => setError(false)}
          sx={{
            border: '1px solid #D2122E',
            background: '#D2122E',
            width: '100%',
            justifyContent: 'center',
          }}
        >
          Please Select one answer
        </Alert>
      </Snackbar>
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
          options.map((option, index) => (
            <Grid item xs={12} lg={6} md={6} sm={6} key={index}>
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
                    fontSize: { xs: 15, md: 20 },
                    textTransform: 'capitalize',
                  }}
                  variant="h2"
                >
                  {option}
                </Typography>
              </button>
            </Grid>
          ))}
      </Grid>
      <Box
        sx={{
          mt: { md: 7, sm: 3 },
          height: 100,
          display: 'flex',
          justifyContent: 'space-between',
          padding: 5,
        }}
      >
        <Button
          onClick={handleQuit}
          variant="contained"
          sx={{
            width: { xs: '100px', md: '15%' },
            height: '60px',
            cursor: 'pointer',
          }}
        >
          Quit
        </Button>

        <Button
          onClick={handleNext}
          variant="contained"
          sx={{
            width: { xs: '100px', md: '15%' },
            height: '60px',
            cursor: 'pointer',
          }}
        >
          Next Question
        </Button>
      </Box>
    </Paper>
  );
};

export default Question;
