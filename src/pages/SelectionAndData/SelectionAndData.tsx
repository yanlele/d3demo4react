/**
 * create by yanle
 * create time 2019-09-03 23:56
 */
import React, {FunctionComponent} from "react";
import {Location} from 'history';
import {parse} from "querystring";
import SelectionAndDataComponent from "../../components/SelectionAndDataComponent/SelectionAndDataComponent";
import BasePage from "../../components/BasePage/BasePage";

interface SelectionAndDataProps {
  location: Location;
}

const SelectionAndData: FunctionComponent<SelectionAndDataProps> = (props) => {
  const {location} = props;
  const pathObject = parse(location.search && location.search.slice(1));
  const { name } = pathObject;
  return (
      <div>
        <BasePage
            name={name}
            apiPrefix="class1"
        >
          <SelectionAndDataComponent
              name={name}
          />
        </BasePage>
      </div>
  );
};

export default SelectionAndData;
