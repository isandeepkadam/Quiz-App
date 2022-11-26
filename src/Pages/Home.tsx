import { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Paper,
  MenuItem,
  Button,
  Snackbar,
  Alert,
} from '@mui/material';
import Categories from '../Data/Categories';
import { useNavigate } from 'react-router';

const Home: React.FunctionComponent<{
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  fetchQuestions: (category: string, difficulty: string) => void;
}> = ({ name, setName, fetchQuestions }) => {
  const [catgory, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!name || !difficulty || !catgory) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions(catgory, difficulty);
      navigate('./quiz');
    }
  };

  return (
    <Box
      sx={{
        background: {
          sm: 'url(./ques.svg) center / contain no-repeat',
          xs: 'url(./ques.svg)',
        },
        bgcolor: '#101010',
        maxWidth: { xs: '300px', sm: '350px', md: '400px', lg: '500px' },
        height: 500,
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
      <Snackbar
        open={error}
        sx={{ marginTop: 10, width: '350px' }}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        onClose={() => setError(false)}
      >
        <Alert
          severity="error"
          onClose={() => setError(false)}
          sx={{
            border: '1px solid red',
            background: '#D2122E',
            width: '100%',
            justifyContent: 'center',
          }}
        >
          Please fill all the fields
        </Alert>
      </Snackbar>
      <Typography sx={{ fontSize: 30 }}>Quiz Settings</Typography>
      {/* <img src="./ques.svg" alt="select quiz" width={100} /> */}
      <Paper
        sx={{
          background: 'transparent',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          width: '250px',
        }}
      >
        <TextField
          placeholder="Enter Your Name"
          sx={{ background: '#fff', mt: 2, borderRadius: 2 }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></TextField>
        <TextField
          select
          label="Select Category"
          variant="filled"
          sx={{
            background: '#fff',
            mt: 2,
            borderRadius: 2,
          }}
          onChange={(e) => setCategory(e.target.value)}
          value={catgory}
        >
          {Categories.map((item) => (
            <MenuItem
              key={item.category}
              value={item.value}
              sx={{ color: 'black', borderRadius: 2 }}
            >
              {item.category}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          select
          label="Select Difficulty"
          variant="filled"
          sx={{
            background: '#fff',
            mt: 2,
            borderRadius: 2,
          }}
          onChange={(e) => setDifficulty(e.target.value)}
          value={difficulty}
        >
          <MenuItem
            key="Easy"
            value="easy"
            sx={{ color: 'black', borderRadius: 2 }}
          >
            Easy
          </MenuItem>
          <MenuItem
            key="Medium"
            value="medium" //shows difficult on options
            sx={{ color: 'black', borderRadius: 2 }}
          >
            Difficult
            {/* There is an issue with difficult category, only option left is easy and medium*/}
          </MenuItem>
        </TextField>
        <Button
          variant="contained"
          sx={{
            background: '#FFC727',
            color: 'black',
            mt: 10,
            height: 50,
          }}
          onClick={handleSubmit}
        >
          Start Quiz
        </Button>
      </Paper>
    </Box>
  );
};

export default Home;
