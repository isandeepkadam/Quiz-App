import { Paper, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Paper
      sx={{
        background: '#202020',
        position: 'fixed',
        bottom: 0,
        width: '100vw',
        height: '5vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography
        sx={{
          backgroundImage: `linear-gradient(to right, #2657eb, #de6161)`,
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontSize: '20px',
          fontWeight: '600',
        }}
      >
        @isandeepkadam
      </Typography>
    </Paper>
  );
};

export default Footer;
