import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { PeopleTable } from './components';

import { setPeople } from '../../redux/slices/people-slice';

import { people as dummyPeople } from '../../data/people';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPeople(dummyPeople));
  }, [dispatch]);

  return <PeopleTable />;
};

export default Home;
