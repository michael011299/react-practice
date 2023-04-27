import { Button } from "react-bootstrap";
import { useState } from "react";

const Count = () => {
    const [count, setCount] = useState(0)
  return (
    <div id="count">
    <h2>Counter: </h2>
      <input value={count} />
      <Button onClick={() => setCount(count + 1)}>+1</Button>
    </div>
  );
}

export default Count;
