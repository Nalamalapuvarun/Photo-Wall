import React, { Component } from "react";

class AddPhoto extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      descriptionError: "",
      imageLinkError: "",
    };
  }
  handleSubmit(event) {
    event.preventDefault();
    const _imageLink = event.target.link.value;
    const _description = event.target.description.value;
    const post = {
      id: Number(new Date()),
      description: _description,
      imageLink: _imageLink,
    };
    if (_description && _imageLink) {
      this.props.onAddPhoto(post);
    } else if (!_description) {
      this.setState({
        descriptionError: "Fill Out the description",
      });
    } else if (!_imageLink) {
      this.setState({
        imageLinkError: "Put in a link for the image",
      });
    }
  }

  render() {
    return (
      <div>
        <h1> Photowall </h1>
        <div className="form">
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Link" name="link" />
            {this.state.imageLinkError && (
              <span style={{ color: "red" }}>{this.state.imageLinkError}</span>
            )}
            <input type="text" placeholder="Desciption" name="description" />
            {this.state.descriptionError && (
              <span style={{ color: "red" }}>
                {this.state.descriptionError}
              </span>
            )}
            <button> Post </button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddPhoto;
