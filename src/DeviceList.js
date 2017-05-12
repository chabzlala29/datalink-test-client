import React, { Component } from 'react';
import DeviceRow from './DeviceRow';
import './DeviceList.css';

const columnNames = [
  'ID',
  'Device Mac Address',
  'Serial #',
  'Color',
  'Name',
  'Description',
  'Building',
  'Level',
  'Device Threshold',
  'Created At',
  'Updated At'
];

class DeviceList extends Component {
  render() {
    let items = [{
      id: 1,
      device_mac: '13123TESTBLA',
      serial_no: 'BLASER12',
      color: 'RED',
      name: 'My Name',
      description: 'Description',
      building: 'Building',
      level: 'GRD FLR',
      device_threshold: 9,
      created_at: "10/20/2019",
      updated_at: "10/20/2019"
    }];

    return (
      <div className="DeviceList">
        <div className="container">
          <table className="table table-striped">
            <thead>
              <tr>
                {columnNames.map( (column, index) => <th key={index}>{column}</th> )}
              </tr>
            </thead>
            <tbody>
              {items.map( item => <DeviceRow item={item} key={item.id} /> )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default DeviceList;
