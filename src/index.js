import React from 'react';
import ReactDOM from 'react-dom';
import Stream from './components/Stream';

const tracks = [
  {
    title: 'track 1'
  },
  {
    title: 'track 2'
  }
];

ReactDOM.render(
  <Stream tracks={tracks} />,
  document.getElementById('app')
);

module.hot.accept();
