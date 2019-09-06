/**
 * create by yanle
 * create time 2019-09-03 23:56
 */
import React, {FunctionComponent} from "react";
import {History, Location} from 'history';
import {Row, Col} from 'antd';
import {parse} from "querystring";
import BaseCodeView from "../../components/BaseCodeView/BaseCodeView";
import SelectionAndDataComponent from "../../components/SelectionAndDataComponent/SelectionAndDataComponent";

interface SelectionAndDataProps {
  history: History;
  location: Location;
}

const SelectionAndData: FunctionComponent<SelectionAndDataProps> = (props) => {
  const {location} = props;
  const pathObject = parse(location.search && location.search.slice(1));
  const { name } = pathObject;
  return (
      <div>
        <Row>
          <Col span={12}>
            <BaseCodeView
                apiPrefix="class1"
                name={name}
            />
          </Col>
          <Col span={12}>
            <SelectionAndDataComponent
                name={name}
            />
          </Col>
        </Row>

      </div>
  );
};

export default SelectionAndData;
