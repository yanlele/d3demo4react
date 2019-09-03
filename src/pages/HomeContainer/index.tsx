import React, {FunctionComponent} from 'react';
import {connect} from 'react-redux';
import {Layout} from 'antd';

const {Header, Content} = Layout;

const HomeContainer: FunctionComponent = () => {
  return (
    <Layout style={{backgroundColor: '#fff'}}>
      <Header style={{background: '#fff'}}>
        header
      </Header>

      <Content style={{margin: '20px'}}>
        content
      </Content>
    </Layout>
  );
};

export default connect()(HomeContainer);
