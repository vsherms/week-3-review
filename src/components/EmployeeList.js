import React from 'react';
import Employee from './Employee';
import Table from 'react-bootstrap/lib/Table';


class EmployeeList extends React.Component {


  render(){
    let employees = this.props.empList.map((emp, index) =>
       (<Employee key={index} emp={emp} handleDelete={this.props.handleDelete}/>));
    return (

      <div>
        <h1>Employee Info</h1>
        <Table striped bordered condensed hover>
          <tbody>
            <tr>
              <th>Employee</th>
              <th>Boss</th>
              <th>Youre Fired!</th>
            </tr>
            {employees}
          </tbody>
        </Table>
      </div>
      );
  }
}

export default EmployeeList;
