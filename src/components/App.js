import React from 'react';
import Employee from './Employee';
import AddEmployee from './AddEmployee';
import EmployeeList from './EmployeeList';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';


let empList = [
  {name: "Joe Stanton", boss: "Zach Brown"},
  {name: "Sam Smith", boss: "Zach Brown"},
  {name: "Jill O'Reiley", boss: "Bono"},
  {name: "Rob Pierangeli", boss: "Chris Martin"},
  {name: "Caroline Madill", boss: "Chris Martin"}
];

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      emps: empList
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.addAnEmployee = this.addAnEmployee.bind(this);
  }



  handleDelete(emp){
    let newList = this.state.emps.filter(x => x.name !== emp.name);
    this.setState({emps: newList});
  }

  addAnEmployee(n, b){
    let emp = {name: n, boss: b};
    this.state.emps.push(emp);
    this.setState();
  }

  render() {
    return (
      <div>
        <Jumbotron>
          <h1>Add an Employee</h1>
          <AddEmployee addAnEmployee={this.addAnEmployee} empList={this.state.emps}/>
        </Jumbotron>
        <EmployeeList empList={this.state.emps} handleDelete={this.handleDelete}/>
      </div>
    );
  }
}




export default App;
