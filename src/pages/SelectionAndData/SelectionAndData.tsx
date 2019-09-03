/**
 * create by yanle
 * create time 2019-09-03 23:56
 */
import React, {FunctionComponent} from "react";
import {History, Location} from 'history';
import {parse} from "querystring";

interface SelectionAndDataProps {
  history: History;
  location: Location;
}

const SelectionAndData: FunctionComponent<SelectionAndDataProps> = (props) => {
  const {history, location} = props;

  console.log(history)
  console.log(location);
  console.log(parse(location.search.slice(1)));

  return (
    <div>
      hello
    </div>
  );
};

export default SelectionAndData;
