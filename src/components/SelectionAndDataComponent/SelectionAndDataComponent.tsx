import React, {FunctionComponent} from "react";
import styled from "styled-components";
import SelectionAndDataComponentDemo1 from "./Demo/SelectionAndDataComponentDemo1";
import SelectionAndDataComponentDemo2 from "./Demo/SelectionAndDataComponentDemo2";
import SelectionAndDataComponentDemo3 from "./Demo/SelectionAndDataComponentDemo3";
import SelectionAndDataComponentDemo4 from "./Demo/SelectionAndDataComponentDemo4";
import SelectionAndDataComponentDemo5 from "./Demo/SelectionAndDataComponentDemo5";
import SelectionAndDataComponentDemo6 from "./Demo/SelectionAndDataComponentDemo6";
import SelectionAndDataComponentDemo7 from "./Demo/SelectionAndDataComponentDemo7";

const Container = styled.div`
  margin: 20px;
`;

interface SelectionAndDataComponentProps {
  name: string | string[];
}

const SelectionAndDataComponent: FunctionComponent<SelectionAndDataComponentProps> = (props) => {
  const functionMapCreator = (key: string | string[]) => {
    switch (key) {
      case 'demo1':
        return <SelectionAndDataComponentDemo1/>;
      case 'demo2':
        return <SelectionAndDataComponentDemo2/>;
      case 'demo3':
        return <SelectionAndDataComponentDemo3/>;
      case 'demo4':
        return <SelectionAndDataComponentDemo4/>;
      case 'demo5':
        return <SelectionAndDataComponentDemo5/>;
      case 'demo6':
        return <SelectionAndDataComponentDemo6/>;
      case 'demo7':
        return <SelectionAndDataComponentDemo7/>;
      default:

        return <h2>Can not find component demo</h2>;
    }
  };

  const {name} = props;
  return (
      <Container>
        {functionMapCreator(name)}
      </Container>
  );
};

export default SelectionAndDataComponent;
