import { Box, Button, Typography } from '@mui/material';
import { useEffect } from 'react';
import ReactConfetti from 'react-confetti';
import { useNavigate } from 'react-router';

const Result: React.FunctionComponent<{
  name: string;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
}> = ({ name, score, setScore }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!name) {
      navigate('/');
    }
  }, [name, navigate]);

  return (
    <Box
      sx={{
        bgcolor: '#101010',
        maxWidth: window.innerWidth * 0.3,
        height: 300,
        margin: 'auto',
        mt: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        border: '1px solid gray',
        borderRadius: '5px',
        boxShadow: '3px 5px #FFC727',
      }}
    >
      {/* {score > 1 && ( */}
      <ReactConfetti
        width={window.innerWidth * 0.3}
        height={300}
        style={{ margin: '110px auto', width: 'auto' }}
        numberOfPieces={100}
      />
      {/* )} */}

      <Typography>Your Score</Typography>
      <Typography
        variant="h1"
        sx={{ fontWeight: '900', fontSize: '150px' }}
        color="primary"
      >
        {score}
      </Typography>
      <Button
        variant="contained"
        sx={{
          background: '#FFd830',
          textShadow: '2px solid white',
          color: 'black',
          mt: 2,
          height: 50,
        }}
        onClick={() => {
          navigate('/');
          setScore(0);
        }}
      >
        Try Again
      </Button>
    </Box>
  );
};

export default Result;
