import { Box, Button, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

const Result: React.FunctionComponent<{ name: string; score: number }> = ({
  name,
  score,
}) => {
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
        maxWidth: { xs: '300px', sm: '350px', md: '400px', lg: '500px' },
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
      <Typography variant="h1" sx={{}}>
        {score}
      </Typography>
      <Button
        variant="contained"
        sx={{
          background: '#FFC727',
          color: 'black',
          mt: 10,
          height: 50,
        }}
        onClick={() => navigate('/')}
      >
        Go To Homepage
      </Button>
    </Box>
  );
};

export default Result;
