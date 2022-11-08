import { Paper, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Paper
      sx={{
        background: '#151515',
        position: 'fixed',
        bottom: 0,
        width: '100vw',
        height: '5vh',
        display: 'flex',
        justifyContent: 'center',
        padding: 1,
      }}
    >
      <Typography
        sx={{
          color: '#fff',
          backgroundImage: `linear-gradient(to right, #2657eb, #de6161)`,
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        @isandeepkadam
      </Typography>
    </Paper>
  );
};

export default Footer;
