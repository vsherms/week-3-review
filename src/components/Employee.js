import React from 'react';
import DeleteButton from './DeleteButton';
import Col from 'react-bootstrap/lib/Popover';

class Employee extends React.Component {

  render(){
    // console.log(this.props)
    return (
      <tr>
        <td>{this.props.emp.name}</td>
        <td>{this.props.emp.boss}</td>
        <DeleteButton emp={this.props.emp} handleDelete={this.props.handleDelete}/>
      </tr>
    );
  }
}

export default Employee;
