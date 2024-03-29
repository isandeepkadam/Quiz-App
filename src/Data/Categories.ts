export interface questionsInterface {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
}

export interface catogoriesInterfae {
  category: string;
  value: number;
}

const Categories = [
  {
    category: 'General Knowledge',
    value: 9,
  },
  { category: 'Films', value: 11 },
  { category: 'Music', value: 12 },
  { category: 'Television', value: 14 },
  { category: 'Video Games', value: 15 },
  { category: 'Board Games', value: 16 },
  { category: 'Science and Nature', value: 17 },
  { category: 'Computer', value: 18 },
  { category: 'Mathematics', value: 19 },
  { category: 'Mythology', value: 20 },
  { category: 'Sports', value: 21 },
  { category: 'Geography', value: 22 },
  { category: 'History', value: 23 },
  // { category: 'Politics', value: 24 },
  { category: 'Celebrities', value: 26 },
  { category: 'Animals', value: 27 },
  { category: 'Vehicles', value: 28 },
  { category: 'Comics', value: 29 },
  { category: 'Japanese Anime', value: 31 },
  { category: 'Cartoon and Animations', value: 32 },
];

export default Categories;
