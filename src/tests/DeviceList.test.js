import React from 'react';
import ReactDOM from 'react-dom';
import DeviceList from '../components/DeviceList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DeviceList />, div);
});
