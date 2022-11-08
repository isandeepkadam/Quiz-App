import { useState } from 'react';
import './App.css';
import { Paper } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Quiz, Result } from './Pages';
import { Footer, Header } from './components';
import axios from 'axios';
import { questionsInterface } from './Data/Categories';

const App = () => {
  const [name, setName] = useState('');
  const [questions, setQuestions] = useState<questionsInterface[]>([]);
  const [score, setScore] = useState(0);

  console.log(questions);

  const fetchQuestions = async (category: string, difficulty: string) => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );
    setQuestions(data.results);
  };

  return (
    <Router>
      <Paper style={{ minHeight: '100vh', background: '#000' }}>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                name={name}
                setName={setName}
                fetchQuestions={fetchQuestions}
              />
            }
          ></Route>
          <Route
            path="/quiz"
            element={
              <Quiz
                name={name}
                questions={questions}
                score={score}
                setScore={setScore}
                setQuestions={setQuestions}
              />
            }
          ></Route>
          <Route
            path="/result"
            element={<Result score={score} name={name} />}
          ></Route>
        </Routes>
        <Footer />
      </Paper>
    </Router>
  );
};

export default App;
