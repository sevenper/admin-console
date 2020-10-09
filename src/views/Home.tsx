import React from 'react';
import { Button, WingBlank } from 'antd-mobile';
import { useSelector, useDispatch } from 'react-redux';
import { changeTitle } from '../store/action';
// import axios from '@axios';

const Home = () => {
  const state = useSelector((state: any) => state);
  const dispatch = useDispatch();

  const load = async () => {
    // const res = await axios.get('/spaces/recommend');
  };

  const change = () => {
    let title = state.home.title;
    dispatch(changeTitle(title + 1));
  };

  React.useEffect(() => {
    load();
  }, []);

  return (
    <WingBlank>
      <Button onClick={change}>{state.home.title}</Button>
    </WingBlank>
  );
};

export default Home;
