import { useState } from 'react';

import { Favorite as FavoriteIcon } from '@mui/icons-material';
import { AppBar, IconButton, Dialog, Toolbar, Typography } from '@mui/material';

import { FavoritesTable } from './components';

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Dialog open={showModal} onClose={closeModal} fullWidth maxWidth='sm'>
        <FavoritesTable />
      </Dialog>
      <AppBar position='fixed' sx={{ textAlign: 'center', backgroundColor: 'rgb(74, 111, 184)' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant='h5' component='div'>
            <div>GP Happy</div>
          </Typography>
          <IconButton variant='contained' onClick={openModal} sx={{ color: 'white' }}>
            <FavoriteIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
