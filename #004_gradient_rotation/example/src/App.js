import React from "react";
import "./App.css";

const Gradient = ({ gradientRotation, colors }) => {
  return (
    <div
      style={{
        background: `linear-gradient(${gradientRotation}, ${colors.join(", ")})`,
        width: "400px",
        height: "400px",
        borderRadius: "50%",
        boxShadow: "2px 4px 5px #444444",
      }}
      className="circle"
    ></div>
  );
};

const ColorSlider = ({ numColors, changeNumColors }) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <label>COLORS: {numColors}</label>
      <input
        type="range"
        min="2"
        max="7"
        value={numColors}
        onChange={(e) => changeNumColors(e.target.value)}
        style={{
          width: "200px",
          cursor: "pointer",
          marginTop: "10px",
        }}
        className="ColorSlider"
      />
    </div>
  );
};

class RotSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: this.generateRandomColors(2),
      gradientRotation: "180deg",
      numColors: 2,
    };
  }

  generateRandomColors(num) {
    const colors = [];
    for (let i = 0; i < num; i++) {
      colors.push(this.generateRandom(111111, "color"));
    }
    return colors;
  }

  generateRandom(input, type) {
    switch (type) {
      case "color":
        let randomNumber = Math.round(input * (1 + Math.random())).toString(16);
        return "#" + randomNumber.padStart(6, '0');
      default:
        return Math.round(input * Math.random());
    }
  }

  makeGradient(value) {
    this.setState({
      gradientRotation: value + "deg",
    });
  }

  changeNumColors(value) {
    const numColors = parseInt(value, 10);
    this.setState({
      colors: this.generateRandomColors(numColors),
      numColors: numColors,
    });
  }

  randomiseColor() {
    this.setState({
      colors: this.generateRandomColors(this.state.numColors),
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
            marginTop: "30px",
          }}
        >
          <Gradient
            gradientRotation={this.state.gradientRotation}
            colors={this.state.colors}
          />
        </div>
        <div style={{ marginTop: "40px" }}>
          <label>ROTATE: </label>
          <input
            type="range"
            min="0"
            max="360"
            defaultValue={180}
            onChange={(e) => this.makeGradient(e.target.value)}
            style={{
              width: "200px",
              cursor: "pointer",
            }}
            className="RotSlider"
          />
        </div>
        <ColorSlider
          numColors={this.state.numColors}
          changeNumColors={(value) => this.changeNumColors(value)}
        />
        <button
          onClick={() => this.randomiseColor()}
          style={{
            cursor: "pointer",
            marginTop: "15px",
          }}
          className="button"
        >
          CHANGE COLOR
        </button>
      </div>
    );
  }
}

export default function App() {
  return (
    <div className="App">
      <div className="background">
        <RotSlider />
      </div>
    </div>
  );
}
