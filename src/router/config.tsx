import React from 'react';
import Loadable from 'react-loadable';

const Loading = () => (
  <div className="async-loading">
    <div className="async-loading-icon">loading</div>
  </div>
);

const asyncComponents = (url: string) =>
  Loadable({
    loader: () => import(`@/views/${url}`),
    loading() {
      return <Loading />;
    },
  });

const route = [
  {
    path: '/',
    name: '首页',
    component: asyncComponents('Home'),
  },
];

export default route;
