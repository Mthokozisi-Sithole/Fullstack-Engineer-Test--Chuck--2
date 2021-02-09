import React from "react";
interface Props {
  message: string;
  code: number;
}

const Errors: React.FC<Props> = ({ message, code }): JSX.Element => (
  <div>
    <h3>
      <strong>{code}</strong>
    </h3>
    : {message}
  </div>
);

export default Errors;
