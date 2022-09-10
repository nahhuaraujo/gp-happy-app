import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Checkbox } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import { setFavorites } from '../../redux/slices/favorites-slice';
import { setPeople } from '../../redux/slices/people-slice';

import { people as dummyPeople } from '../../data/people';

const Home = () => {
  const { people, favorites } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPeople(dummyPeople));
  }, [dispatch]);

  const personExists = person => !!favorites.find(p => p.id === person.id);
  const filterPerson = person => favorites.filter(p => p.id !== person.id);

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
        <Checkbox
          size='small'
          checked={personExists(params.row)}
          onChange={() => {
            handleCheckPerson(params.row);
          }}
        />
      ),
    },
    { field: 'name', headerName: 'First name', flex: 1, renderCell: params => params.value },
    { field: 'surname', headerName: 'Surname', flex: 1, renderCell: params => params.value },
  ];

  const handleCheckPerson = person => {
    const newFavorites = personExists(person) ? filterPerson(person) : [...favorites, person];
    dispatch(setFavorites(newFavorites));
  };

  return (
    <>
      <DataGrid
        getRowId={row => row.id}
        columns={columns}
        rows={people}
        pageSize={pageSize}
        rowsPerPageOptions={[pageSize]}
        autoHeight
        disableColumnSelector
        disableSelectionOnClick
      />
      <button
        onClick={() => {
          console.log(favorites);
        }}
      >
        Show selected people
      </button>
    </>
  );
};

export default Home;
