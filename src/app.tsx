import React from "react";

/**
 * React Component Example
 *
 * @return {React.ReactElement} Simple `div` element
 */
export function App(): React.ReactElement {
  return (
    <div>
      <div>Hey</div>
      <div aria-hidden="true" />
    </div>
  );
}
