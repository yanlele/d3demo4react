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

interface ListRouter {
  title: string,
  pathname: string,
  routerItems: { name: string, search: string }[],
}

const HomeContainer: FunctionComponent<HomeContainerProps> = (props) => {
  const {history, location} = props;

  console.log(location);
  console.log(parse(location.search));

  const [listRouter] = useState<ListRouter[]>([
    {
      title: '数据与选择集',
      pathname: '/select-data/',
      routerItems: [
        {
          name: 'demo1',
          search: 'name=demo1',
        },
        {
          name: 'demo2',
          search: 'name=demo2',
        },
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
                <List
                  dataSource={item.routerItems}
                  renderItem={listItem => (
                    <ListItem>
                      <Link to={{
                        pathname: item.pathname,
                        search: listItem.search,
                      }}>{listItem.name}</Link>
                    </ListItem>
                  )}
                />
              </Card>
            </ListItem>
          )}
        />
      </Content>
    </Layout>
  );
};

export default connect()(HomeContainer);
