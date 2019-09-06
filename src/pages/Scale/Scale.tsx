import React, {FunctionComponent} from "react";
import BasePage from "../../components/BasePage/BasePage";
import {parse} from "querystring";
import {Location} from "history";
import ScaleComponent from "../../components/ScaleComponent/ScaleComponent";

interface ScaleProps {
  location: Location;
}

const Scale: FunctionComponent<ScaleProps> = (props) => {
  const {location} = props;
  const pathObject = parse(location.search && location.search.slice(1));
  const { name } = pathObject;
  return (
      <div>
        <BasePage
            name={name}
            apiPrefix="class2"
        >
          <ScaleComponent
              name={name}
          />
        </BasePage>
      </div>
  );
};
export default Scale;
