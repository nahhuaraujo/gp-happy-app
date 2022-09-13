import { useDispatch, useSelector } from 'react-redux';

import { IconButton } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import { Favorite, FavoriteBorderOutlined } from '@mui/icons-material';

import { setFavorites } from '../../../../redux/slices/favorites-slice';

const PeopleTable = () => {
  const { people, favorites } = useSelector(state => state);
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
    // {
    //   field: 'actions',
    //   headerName: '',
    //   sortable: false,
    //   filterable: false,
    //   disableColumnMenu: true,
    //   width: 50,
    //   renderCell: params => (
    //     <Checkbox
    //       size='small'
    //       checked={personExists(params.row)}
    //       onChange={() => {
    //         handleCheckPerson(params.row);
    //       }}
    //     />
    //   ),
    // },
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
    <DataGrid
      sx={{ backgroundColor: 'white' }}
      getRowId={row => row.id}
      columns={columns}
      rows={people}
      pageSize={pageSize}
      rowsPerPageOptions={[pageSize]}
      autoHeight
      disableColumnSelector
      disableSelectionOnClick
    />
  );
};

export default PeopleTable;
