import React from "react";

class ProjectCard extends React.Component {
  state = {
    content: this.props.title
  };

  handlePopoverOpen = event => {
    this.setState({ content: this.props.note });
  };

  handlePopoverClose = () => {
    this.setState({ content: this.props.title });
  };

  render() {
    return (
      <div className="col m12 l6">
        <div
          className="card small horizontal"
          onMouseEnter={this.handlePopoverOpen}
          onMouseLeave={this.handlePopoverClose}>
          <div className="card-image">
            <img
              style={{ maxHeight: "100%",  width: "auto"}}
              src={`${window.location.origin}/assets/images/${
                this.props.image
              }.png`}
              alt={this.props.title}
            />
          </div>
          <div className="activator card-stacked">
            <div className="card-content">
              <h4>{this.state.content}</h4>
            </div>
            <div className="card-action">
              <a href={this.props.app} target="_blank">
                App
              </a>
              <a href={this.props.github} target="_blank">
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
