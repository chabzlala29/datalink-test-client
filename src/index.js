import React from 'react';
import ReactDOM from 'react-dom';
import DeviceList from './DeviceList';

// Styles
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';

ReactDOM.render(
  <DeviceList />,
  document.getElementById('device-list')
);
