import React, {FunctionComponent} from "react";
import styled from 'styled-components';
import ScaleComponentDemo1 from "./Demo/ScaleComponentDemo1";
import ScaleComponentDemo2 from "./Demo/ScaleComponentDemo2";

const Container = styled.div`
  margin: 20px;
`;

interface ScaleComponentPropos {
  name: string | string[];
}

const ScaleComponent: FunctionComponent<ScaleComponentPropos> = (props) => {
  const {name} = props;
  const functionMapCreator = (key: string | string[]) => {
    switch (key) {
      case 'demo1':
        return <ScaleComponentDemo1/>;
      case 'demo2':
        return <ScaleComponentDemo2/>;
      default:
        return <h2>Can not find component demo</h2>;
    }
  };

  return (
      <Container>
        {functionMapCreator(name)}
      </Container>
  );
};

export default ScaleComponent;
