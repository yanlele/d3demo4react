import React, {FunctionComponent} from "react";
import {History, Location} from 'history';
import BasePage from "../../components/BasePage/BasePage";

interface SelectionAndDataProps {
  history: History;
  location: Location;
}

const Scale: FunctionComponent<SelectionAndDataProps> = (props) => {
  const {location, history} = props;
  return (
      <>
        <BasePage
            apiPrefix="class2"
            location={location}
            history={history}
        />
      </>
  );
};

export default Scale;
