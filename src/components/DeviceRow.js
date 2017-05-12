import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

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
        <td>
          <Button bsSize="xsmall" bsStyle="danger" onClick={this._handleDelete.bind(this)}>Delete</Button>
        </td>
      </tr>
    );
  }

  _handleDelete(event) {
    event.preventDefault();
    if(confirm('Are you sure?')) {
      this.props.onDelete(this.props.item);
    }
  }
}

export default DeviceRow;
