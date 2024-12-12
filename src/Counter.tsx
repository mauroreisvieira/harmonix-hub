import React, { useState } from "react";

/** Interface for Counter props.  */
interface CounterProps {
  /** Title of counter component. */
  title: string;
}

/**
 * Counter Component
 *
 * A simple counter component that increments the count when clicked
 * or when the Enter key is pressed while the button is focused.
 *
 * @returns Counter component
 */
export function Counter({ title }: CounterProps): React.ReactElement {
  const [count, setCount] = useState(0);

  return (
    <div>
      {title && <h1>{title}</h1>}
      <div>{count}</div>
      <div
        role="button"
        tabIndex={0}
        onKeyDown={() => setCount((prev) => prev++)}
        onClick={() => setCount((prev) => prev++)}
      />
      <div aria-hidden="true" />
    </div>
  );
}
