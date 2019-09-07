import React, {FunctionComponent} from "react";
import styled from 'styled-components';
import DrawComponentDemo1 from "./Demo/DrawComponentDemo1";
import DrawComponentDemo2 from "./Demo/DrawComponentDemo2";

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
