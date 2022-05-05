import React, { Component } from "react";
import "./RollDice.css";
import Dice from "./Die";

export default class RollDice extends Component {
  state = {
    number1: "one",
    number2: "one",
  };
  render() {
    const rollHandler = () => {
      let Rnd1 = Math.floor(Math.random() * 6) + 1;
      let Rnd2 = Math.floor(Math.random() * 6) + 1;
      if (Rnd1 === 1) {
        this.setState({ number1: "one" });
      } else if (Rnd1 === 2) {
        this.setState({ number1: "two" });
      } else if (Rnd1 === 3) {
        this.setState({ number1: "three" });
      } else if (Rnd1 === 4) {
        this.setState({ number1: "four" });
      } else if (Rnd1 === 5) {
        this.setState({ number1: "five" });
      } else if (Rnd1 === 6) {
        this.setState({ number1: "six" });
      }

      if (Rnd2 === 1) {
        this.setState({ number2: "one" });
      } else if (Rnd2 === 2) {
        this.setState({ number2: "two" });
      } else if (Rnd2 === 3) {
        this.setState({ number2: "three" });
      } else if (Rnd2 === 4) {
        this.setState({ number2: "four" });
      } else if (Rnd2 === 5) {
        this.setState({ number2: "five" });
      } else if (Rnd2 === 6) {
        this.setState({ number2: "six" });
      }
    };
    return (
      <div className="rollDice">
        <div className="dices">
          <Dice classDice={`fas fa-dice-${this.state.number1}`} />
          <Dice classDice={`fas fa-dice-${this.state.number2}`} />
        </div>
        <button onClick={rollHandler} className="rollBtn">
          Roll Dice!
        </button>
      </div>
    );
  }
}
