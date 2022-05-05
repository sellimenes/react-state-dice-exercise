import React, { Component } from "react";
import "./RollDice.css";
import Dice from "./Die";

export default class RollDice extends Component {
  state = {
    number1: "one",
    number2: "one",
    isRolling: false,
  };

  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"],
  };
  render() {
    const rollHandler = () => {
      // Pick 2 random numbers from defaultProps
      const newNumber1 =
        this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
      const newNumber2 =
        this.props.sides[Math.floor(Math.random() * this.props.sides.length)];

      // Match new random numbers with the state numbers
      this.setState({
        number1: newNumber1,
        number2: newNumber2,
        isRolling: true, // Change button text
      });

      // Change default button text after 1s
      setTimeout(() => {
        this.setState({ isRolling: false });
      }, 1000);
    };

    const oneDice = () => {
      document.querySelector(".dice1").style.display = "none";
      document.querySelector(".dices").style.gap = 0;
    };
    const twoDice = () => {
      document.querySelector(".dice1").style.display = "block";
      document.querySelector(".dices").style.gap = "1rem";
    };

    return (
      <div className="rollDice">
        <div className="dices">
          <Dice
            classDice={`dice1 fas fa-dice-${this.state.number1} ${
              this.state.isRolling ? "shaking" : ""
            }`}
            rolling={this.state.isRolling}
          />
          <Dice
            classDice={`dice2 fas fa-dice-${this.state.number2} ${
              this.state.isRolling ? "shaking" : ""
            }`}
            rolling={this.state.isRolling}
          />
        </div>
        <button
          onClick={rollHandler}
          className="rollBtn"
          disabled={this.state.isRolling}
        >
          {this.state.isRolling ? "Rolling..." : "Roll Dice!"}
        </button>
        <div className="diceNumber">
          <button onClick={oneDice}>1 Dice</button>
          <button onClick={twoDice}>2 Dices</button>
        </div>
      </div>
    );
  }
}
