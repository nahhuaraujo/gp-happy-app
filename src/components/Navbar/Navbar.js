import { AppBar, Toolbar, Typography } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position='fixed' style={{ textAlign: 'center' }}>
      <Toolbar>
        <Typography variant='h5' component='div' sx={{ flexGrow: 2 }}>
          GP Happy
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
