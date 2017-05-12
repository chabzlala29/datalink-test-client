import React, { Component } from 'react';
import DeviceRow from './DeviceRow';
import SearchBox from './SearchBox';
import '../styles/DeviceList.css';
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

  _fetchDevices(query) {
    jQuery.ajax({
      method: 'GET',
      url: '/api/v1/devices',
      accept: 'application/json',
      data: { q: { name_or_device_mac_cont: query } },
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

  template() {
    let size = this.state.devices.length;

    if (size > 0) {
      return (
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
      );
    } else {
      return (
        <h3>No Records Found.</h3>
      )
    }
  }

  render() {
    return (
      <div className="DeviceList">
        <div className="container">
          <SearchBox onRefresh={this._fetchDevices.bind(this)}/>
          {this.template()}
        </div>
      </div>
    );
  }
}

export default DeviceList;
