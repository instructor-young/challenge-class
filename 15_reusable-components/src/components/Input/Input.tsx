import { cva, cx } from "class-variance-authority";

const labelVariant = cva("", {
  variants: {
    size: {
      sm: "",
      md: "",
      lg: "",
    },
  },
});

const inputColorVariant = cva("", {
  variants: {
    size: {
      sm: "",
      md: "",
      lg: "",
    },
  },
});
const inputSizeVariant = cva("", {
  variants: {
    size: {
      sm: "",
      md: "",
      lg: "",
    },
  },
});

function Input() {
  return (
    <div>
      <label className={labelVariant({ size })}></label>
      <input className={cx(inputColorVariant({ size }, inputSizeVariant({ size })))} />
    </div>
  );
}

export default Input;
