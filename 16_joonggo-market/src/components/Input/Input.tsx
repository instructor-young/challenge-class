import { ComponentProps, useId } from "react";

type InputProps = {
  label: string;
} & ComponentProps<"input">;

function Input({ label, id, ...props }: InputProps) {
  const inputUid = useId();
  const inputId = id || inputUid;

  return (
    <div className="flex flex-col">
      <label htmlFor={inputId}>{label}</label>
      <input id={inputId} {...props} className="border" />
    </div>
  );
}

export default Input;
