import React, {FunctionComponent, useState} from 'react';
import {connect} from 'react-redux';
import {Layout, List, Card} from 'antd';
import {History, Location} from 'history';
import {parse} from 'querystring';
import {Link} from 'react-router-dom';

const {Header, Content} = Layout;
const {Item: ListItem} = List;

interface HomeContainerProps {
  history: History;
  location: Location;
}

const HomeContainer: FunctionComponent<HomeContainerProps> = (props) => {
  const {history, location} = props;

  console.log(location);
  console.log(parse(location.search));

  const [listRouter] = useState([
    {
      title: '数据与选择集',
      routerItems: [
        '',
      ],
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
            <ListItem
              // onClick={() => history.push({
              //   pathname: '/select-data/',
              //   search: 'name=yanle',
              // })}
            >
              <Card title={item.title}>
                <Link to={{
                  pathname: '/select-data/',
                  search: 'name=yanle',
                }}>跳转</Link>
              </Card>
            </ListItem>
          )}
        />
      </Content>
    </Layout>
  );
};

export default connect()(HomeContainer);
