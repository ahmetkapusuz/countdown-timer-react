import React, {Component} from "react";
import { render } from "react-dom";
import CountdownTimer from "../../lib";
import {addSeconds} from 'date-fns';
import "./styles.css";

class Demo extends Component {

  onTimerExpire() {
    console.log("Timer expired!");
  }

  render() {
    const countdownDate = addSeconds(new Date(), 10);

    return (
      <div>
        <h1>Sample Timer Component</h1>
        <CountdownTimer endDate={countdownDate} onTimerExpire={this.onTimerExpire.bind(this)}/>
      </div>
    );
  }

}

export default Demo;

render(<Demo />, document.getElementById("app"));
