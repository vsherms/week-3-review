import React from 'react';
import Button from 'react-bootstrap/lib/Button';

class AddEmployee extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      boss: ""
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleBossChange = this.handleBossChange.bind(this);
    this.handleEmpChange = this.handleEmpChange.bind(this);
  }

  handleNameChange(e) {
    this.setState({name: e.target.value});
  }
  handleBossChange(e) {
    this.setState({boss: e.target.value});
  }

  handleEmpChange(e) {
    this.props.addAnEmployee(this.state.name, this.state.boss);
    this.setState({name: '', boss: ''});

    // this.props.addAnEmployee(this.state.name, this.state.boss);
  }

  render(){

    return(
      <div>
        <form method="" role="form">
          <legend>Youre Hired!</legend>

          <div className="form-group">
            <input onChange={this.handleNameChange} className="form-control" value={this.state.name} type="text" id="Name" placeholder="Employee Name"/>
          </div>

          <div className="form-group">
            <input onChange={this.handleBossChange} className="form-control" value={this.state.boss} type="text" id="Boss" placeholder="Employee's Boss"/>
          </div>

          <Button className="btn btn-primary" bsStyle="success" bsSize="small"
          onClick={this.handleEmpChange}>Add An Employee</Button>
        </form>
      </div>
    );
  }
}

export default AddEmployee;
