import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import Popover from 'react-bootstrap/lib/Popover';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Col from 'react-bootstrap/lib/Col';

class DeleteButton extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.handleDelete(this.props.emp);
  }


  render(){

    return(
      <td>
           <OverlayTrigger trigger='hover' placement='right' overlay={
             <Popover
               id="popover-basic"
               placement="right"
               positionLeft={200}
               title="This guy's in trouble">
               It could be time to let {this.props.emp.name} go.
             </Popover>}>
             <Button className="btn btn-primary" bsStyle="danger" bsSize="small" onClick={this.handleClick}>
             Delete
            </Button>
         </OverlayTrigger>
      </td>
    );
  }
}

export default DeleteButton;
