import React, {FunctionComponent} from "react";
import styled from 'styled-components';
import DrawComponentDemo1 from "./Demo/DrawComponentDemo1";
import DrawComponentDemo2 from "./Demo/DrawComponentDemo2";
import DrawComponentDemo3 from "./Demo/DrawComponentDemo3";
import DrawComponentDemo4 from "./Demo/DrawComponentDemo4";
import DrawComponentDemo5 from "./Demo/DrawComponentDemo5";

const Container = styled.div`
  margin: 20px;
`;

interface DrawComponentProps {
  name: string | string[];
}

const DrawComponent: FunctionComponent<DrawComponentProps> = (props) => {
  const {name} = props;
  const functionMapCreator = (key: string | string[]) => {
    switch (key) {
      case 'demo1':
        return <DrawComponentDemo1/>;
      case 'demo2':
        return <DrawComponentDemo2/>;
      case 'demo3':
        return <DrawComponentDemo3/>;
      case 'demo4':
        return <DrawComponentDemo4/>;
      case 'demo5':
        return <DrawComponentDemo5/>;
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

export default DrawComponent;
