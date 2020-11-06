import "./ImageCard.css";
import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({ spans });
  };

  render() {
    const { description, urls, user } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <Popup
          trigger={
            <a rel="noopener noreferrer">
              <img ref={this.imageRef} alt={description} src={urls.regular} />
            </a>
          }
          position="center center"
          modal>
          <div className="modal">
            <img src={urls.regular} alt={description} />
            <p>{user.location}</p>
            <p>{user.name}</p>
          </div>
        </Popup>
      </div>
    );
  }
}

export default ImageCard;
