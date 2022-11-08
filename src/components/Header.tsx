import { Typography, Paper } from '@mui/material';

const Header = () => {
  return (
    <Paper
      className="header"
      style={{
        background: '#151515',
        margin: 0,
        padding: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '0px 0px 10px 10px',
      }}
      elevation={7}
    >
      <Typography
        variant="h2"
        style={{
          fontWeight: 700,
          fontSize: '8vh',
          textTransform: 'uppercase',
          WebkitTextStrokeWidth: '.5px',
          WebkitTextStrokeColor: '#FFC727',
        }}
        sx={{
          backgroundImage: `linear-gradient(to right, #009fff, #ec2f4b)`,
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Quiz Hub
      </Typography>
    </Paper>
  );
};

export default Header;
//
