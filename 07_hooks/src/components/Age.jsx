import React from "react";

function Age({ age }) {
  console.log("age 리렌더링");

  return <div>{age}</div>;
}

export default React.memo(Age);
