import React, {FunctionComponent} from "react";
import {Row, Col} from 'antd';
import BaseCodeView from "../BaseCodeView/BaseCodeView";

interface SelectionAndDataProps {
  name: string | string[];
  apiPrefix: string;
}

const BasePage: FunctionComponent<SelectionAndDataProps> = (props) => {
  const {name, children, apiPrefix} = props;
  return (
    <div>
      <Row>
        <Col span={12}>
          <BaseCodeView
            apiPrefix={apiPrefix}
            name={name}
          />
        </Col>

        <Col span={12}>
          {children}
        </Col>
      </Row>

    </div>
  );
};

export default BasePage;
