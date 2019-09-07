import React, {FunctionComponent} from "react";
import BasePage from "../../components/BasePage/BasePage";
import {parse} from "querystring";
import {Location} from "history";
import DrawComponent from "../../components/DrawComponent/DrawComponent";

interface DrawProps {
  location: Location;
}

const Draw: FunctionComponent<DrawProps> = (props) => {
  const {location} = props;
  const pathObject = parse(location.search && location.search.slice(1));
  const { name } = pathObject;
  return (
    <div>
      <BasePage
        name={name}
        apiPrefix="class3"
      >
        <DrawComponent
          name={name}
        />
      </BasePage>
    </div>
  );
};
export default Draw;
