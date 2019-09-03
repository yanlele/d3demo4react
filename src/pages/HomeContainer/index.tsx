import React, {FunctionComponent, useState} from 'react';
import {connect} from 'react-redux';
import {Layout, List, Card} from 'antd';
import {withRouter } from 'react-router-dom';
import {History} from 'history';

const {Header, Content} = Layout;
const {Item: ListItem} = List;

interface HomeContainerProps {
  history: History;
}

const HomeContainer: FunctionComponent<HomeContainerProps> = (props) => {
  const {history} = props;
  console.log(history);

  const [listRouter] = useState([
    {
      title: '数据与选择集',
    },
  ]);

  return (
    <Layout style={{backgroundColor: '#fff'}}>
      <Header style={{background: '#fff'}}>
        <h1>D3 </h1>
      </Header>

      <Content style={{margin: '20px'}}>
        <List
          grid={{gutter: 16, column: 4}}
          dataSource={listRouter}
          renderItem={item => (
            <ListItem>
              <Card title={item.title}>Card content</Card>
            </ListItem>
          )}
        />
      </Content>
    </Layout>
  );
};

export default connect()(withRouter(HomeContainer));
