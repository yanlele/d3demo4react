import React, {FunctionComponent} from "react";
import styled from 'styled-components';

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
      case 'demo2':
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
