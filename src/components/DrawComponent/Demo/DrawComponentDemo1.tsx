import React, {FunctionComponent, useEffect, useRef} from "react";

const DrawComponentDemo1: FunctionComponent = () => {
  const elements = useRef(null);

  useEffect(() => {

  });

  return (
      <>
        <h2>demo1 - </h2>
        <div ref={elements}></div>
      </>
  );
};

export default DrawComponentDemo1;
