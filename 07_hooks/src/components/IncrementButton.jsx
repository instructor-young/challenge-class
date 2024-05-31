import React from "react";

const IncrementButton = React.memo(({ increment }) => {
  return <button onClick={increment}>Increment</button>;
});

IncrementButton.displayName = "IncrementButton";

export default IncrementButton;
