import React, {FunctionComponent} from "react";
import styled from 'styled-components';

const Container = styled.div`
  margin: 20px;
`;

interface ScaleComponentPropos {
  name: string | string[];
}

const ScaleComponent: FunctionComponent<ScaleComponentPropos> = (props) => {
  const {name} = props;

  return (
      <Container>
        ScaleComponent - {name}
      </Container>
  );
};

export default ScaleComponent;
