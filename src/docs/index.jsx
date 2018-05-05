import React from "react";
import { render } from "react-dom";
import CountdownTimer from "../../lib";
import "./styles.css";

class Demo() {

  onTimerExpire() {
    console.log("Timer expired!");
  }

  render() {
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
