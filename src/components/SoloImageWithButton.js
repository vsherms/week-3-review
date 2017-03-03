import React from 'react';

class SoloImageWithButton extends React.Component {

  constructor() {
    super();
    this.addOurImage = this.addOurImage.bind(this);
  }

  addOurImage() {
    this.props.addNewImage(this.props.img);
  }

  render() {
    let ourButton = (
      <button onClick={this.addOurImage} type="submit"
        className="btn btn-primary">Add To My List</button>
    );
    return (
      <div key={this.props.img.name}>
        <img src={this.props.img.url}></img>
        {this.props.noButton ? "" : ourButton}
        <h3>{this.props.img.description}</h3>
      </div>
    );
  }
}

SoloImageWithButton.propTypes = {
  img: React.PropTypes.object,
  addNewImage: React.PropTypes.func,
  noButton: React.PropTypes.bool
};

export default SoloImageWithButton;
