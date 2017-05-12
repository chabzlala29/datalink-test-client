import React, { Component } from 'react';

class DeviceRow extends Component {
  render() {
    let item = this.props.item;

    return (
      <tr>
        <th scope="row">{item.id}</th>
        <td>{item.device_mac}</td>
        <td>{item.serial_no}</td>
        <td>{item.color}</td>
        <td>{item.name}</td>
        <td>{item.description}</td>
        <td>{item.building}</td>
        <td>{item.level}</td>
        <td>{item.device_threshold}</td>
        <td>{item.created_at}</td>
        <td>{item.updated_at}</td>
      </tr>
    );
  }
}

export default DeviceRow;
