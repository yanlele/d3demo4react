import React, {FunctionComponent} from "react";
import styled from 'styled-components';
import ScaleComponentDemo1 from "./Demo/ScaleComponentDemo1";
import ScaleComponentDemo2 from "./Demo/ScaleComponentDemo2";
import ScaleComponentDemo3 from "./Demo/ScaleComponentDemo3";
import ScaleComponentDemo4 from "./Demo/ScaleComponentDemo4";
import ScaleComponentDemo5 from "./Demo/ScaleComponentDemo5";
import ScaleComponentDemo12 from "./Demo/ScaleComponentDemo12";
import ScaleComponentDemo13 from "./Demo/ScaleComponentDemo13";
import ScaleComponentDemo14 from "./Demo/ScaleComponentDemo14";
import ScaleComponentDemo15 from "./Demo/ScaleComponentDemo15";
import ScaleComponentDemo16 from "./Demo/ScaleComponentDemo16";

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
      case 'demo3':
        return <ScaleComponentDemo3/>;
      case 'demo4':
        return <ScaleComponentDemo4/>;
      case  'demo5':
        return <ScaleComponentDemo5/>;
      case 'demo12':
        return <ScaleComponentDemo12/>;
      case 'demo13':
        return <ScaleComponentDemo13/>;
      case 'demo14':
        return <ScaleComponentDemo14/>;
      case 'demo15':
        return <ScaleComponentDemo15/>;
      case 'demo16':
        return <ScaleComponentDemo16/>;
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
