import React from 'react';
import {
  Layout, Menu, Row, Col,
} from 'antd';
import {
  HashRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import Routes from '../routes';

const { Content, Footer } = Layout;


export default function Page() {
  return (
    <Layout className="App" style={{ background: '#fff' }} theme="light">
      <Router>
        {/* <Menu mode="horizontal">
          {Routes.map((page) => (
            <Menu.Item key={page.path}>
              <Link to={page.path}>{page.label}</Link>
            </Menu.Item>
          ))}
        </Menu> */}
        <Content theme="light" className="content-wrapper">
          <Switch>
            {Routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            ))}
          </Switch>
        </Content>
        <Footer style={{ textAlign: 'center', background: '#ffffff', borderTop: '1px solid #ccc' }}>
          ©{new Date().getFullYear()} Created by D&J
        </Footer>
      </Router>
    </Layout>
  );
}
