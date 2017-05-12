import React, { Component } from 'react';
import DeviceRow from './DeviceRow';
import './DeviceList.css';
import jQuery from 'jquery';

class DeviceList extends Component {
  constructor(props) {
    super(props);

    this.columnNames = [
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

    this.state = {
      devices: []
    };
  }

  componentWillMount() {
    this._fetchDevices();
  }

  componentDidMount() {
    this._timer = setInterval(
      () => this._fetchDevices(),
      5000
    );
  }

  componentWillUnMount() {
    clearInterval(this._timer);
  }

  _fetchDevices() {
    jQuery.ajax({
      method: 'GET',
      url: '/api/v1/devices',
      accept: 'application/json',
      success: (devices) => {
        this.setState({ devices })
      }
    })
  }

  _deleteDevice(device) {
    jQuery.ajax({
      method: 'DELETE',
      url: `/api/v1/devices/${device.id}`
    })

    const devices = [...this.state.devices];
    const deviceIndex = devices.indexOf(device)
    devices.splice(deviceIndex, 1);

    this.setState({ devices });
  }


  render() {
    return (
      <div className="DeviceList">
        <div className="container">
          <table className="table table-striped">
            <thead>
              <tr>
                {this.columnNames.map( (column, index) => <th key={index}>{column}</th> )}
              </tr>
            </thead>
            <tbody>
              {this.state.devices.map( item => <DeviceRow item={item} key={item.id} onDelete={this._deleteDevice.bind(this)} /> )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default DeviceList;
