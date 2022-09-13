import { useSelector, useDispatch } from 'react-redux';

import { Paper, Typography, IconButton } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import { Favorite, FavoriteBorderOutlined } from '@mui/icons-material';

import { setFavorites } from '../../../../redux/slices/favorites-slice';

const FavoritesTable = () => {
  const { favorites } = useSelector(state => state);
  const dispatch = useDispatch();

  const pageSize = 3;
  const columns = [
    {
      field: 'actions',
      headerName: '',
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      width: 50,
      renderCell: params => (
        <IconButton
          onClick={() => {
            handleCheckPerson(params.row);
          }}
        >
          {personExists(params.row) ? <Favorite /> : <FavoriteBorderOutlined />}
        </IconButton>
      ),
    },
    { field: 'name', headerName: 'First name', flex: 1, renderCell: params => params.value },
    { field: 'surname', headerName: 'Surname', flex: 1, renderCell: params => params.value },
    { field: 'happiness', headerName: 'Happiness', flex: 1, renderCell: params => params.value },
  ];

  const personExists = person => !!favorites.find(p => p.id === person.id);
  const filterPerson = person => favorites.filter(p => p.id !== person.id);

  const handleCheckPerson = person => {
    const newFavorites = personExists(person) ? filterPerson(person) : [...favorites, person];
    dispatch(setFavorites(newFavorites));
  };

  return (
    <Paper elevation={3}>
      <Typography variant='h5' component='div' sx={{ p: 2 }}>
        Favorites
      </Typography>
      <DataGrid
        getRowId={row => row.id}
        columns={columns}
        rows={favorites}
        pageSize={pageSize}
        rowsPerPageOptions={[pageSize]}
        autoHeight
        disableColumnSelector
        disableSelectionOnClick
      />
    </Paper>
  );
};

export default FavoritesTable;
