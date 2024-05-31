import React, { useId } from "react";

function Input() {
  const id = useId();

  return (
    <div>
      <label htmlFor={id}>눌러</label>
      <input id={id} />
    </div>
  );
}

export default Input;
