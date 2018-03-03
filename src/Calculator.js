import React, {Component} from 'react';


class Calculator extends Component {
  constructor(props) {
    super()
    this.state = {
      calcResults: 0,
      inputA: 0,
      inputB: 0
    }
  }

  addStuff(e) {
    e.preventDefault();
    let newNumber = this.state.inputA + this.state.inputB;
    this.setState({
      calcResults: newNumber,
      inputA: 0,
      inputB: 0
    })
  }

  clearCalc(e) {
    e.preventDefault();
    this.setState({
      calcResults: 0,
      inputA: 0,
      inputB: 0
    })
  }



  render(){

    return(
      <div className="container">
        <h1>Add with React!</h1>

        <div className="add">
           <input type="number" />
           <span>+</span>
           <input type="number" />
           <span>=</span>
           <h3>Addition results go here!</h3>
           <form>

           </form>
        </div>
      </div>
    )
  }

}

export default Calculator
