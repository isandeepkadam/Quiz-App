import { Typography, Paper } from '@mui/material';

const Header = () => {
  return (
    <Paper
      className="header"
      sx={{
        background: '#151515',
        margin: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '0px 0px 15px 15px',
        boxShadow: '1px 1px 10px #666',
      }}
      elevation={8}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: 700,
          fontSize: '8vh',
          textTransform: 'uppercase',
          WebkitTextStrokeWidth: '.5px',
          WebkitTextStrokeColor: '#FFC727',
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
