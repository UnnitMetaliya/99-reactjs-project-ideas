import React from "react";
import "./styles.css";

const Gradient = (props) => {
  return (
    <div
      style={{
        background:
          "linear-gradient(" +
          props.gradientRotation +
          ", " +
          props.firstColor +
          ", " +
          props.secondColor +
          ")",
        width: "200px",
        height: "200px",
        borderRadius: "50%",
        boxShadow: "2px 4px 5px #444444"
      }}
      className="circle"
    ></div>
  );
};

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstColor: this.generateRandom(111111, "color"),
      secondColor: this.generateRandom(111111, "color"),
      gradientRotationSlider: 180,
      gradientRotation: "180deg"
    };
  }
  generateRandom(input, type) {
    switch (type) {
      case "color":
        let randomNumber = Math.round(input * (1 + Math.random()));
        return "#" + randomNumber;
      default:
        return Math.round(input * Math.random());
    }
  }
  makeGradient(value) {
    this.setState({
      gradientRotationSlider: value,
      gradientRotation: value + "deg"
    });
  }
  randomiseColor() {
    this.setState({
      firstColor: this.generateRandom(111111, "color"),
      secondColor: this.generateRandom(111111, "color")
    });
  }
  render() {
    return (
      <div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "30px"
          }}
        >
          <Gradient
            gradientRotation={this.state.gradientRotation}
            firstColor={this.state.firstColor}
            secondColor={this.state.secondColor}
          />
        </div>
        <div style={{ marginTop: "40px" }}>
          <input
            type="range"
            min="0"
            max="360"
            defaultValue={this.state.gradientRotationSlider}
            onChange={(e) => this.makeGradient(e.target.value)}
            style={{
              width: "200px",
              cursor: "pointer"
            }}
            className="slider"
          />
        </div>
        <button
          onClick={() => this.randomiseColor()}
          style={{
            cursor: "pointer",
            marginTop: "15px"
          }}
          className="button"
        >
          Change Color
        </button>
      </div>
    );
  }
}

export default function App() {
  return (
    <div className="App">
      <div className="background">
        <Slider />
      </div>
    </div>
  );
}
