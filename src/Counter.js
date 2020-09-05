import React, { useState } from "react";
import { render } from "@testing-library/react";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button
          onClick={() => this.setState(({ count }) => ({ count: count + 1 }))}
        >
          {this.props.label}
        </button>
      </div>
    );
  }
}
// const _Counter = (props) => {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>{props.label}</button>
//     </div>
//   );
// };

export default Counter;
