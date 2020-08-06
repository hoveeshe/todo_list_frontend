import React from 'react'
import { Layout, Menu, Breadcrumb, Card, Row, Col } from 'antd'
import {
  LikeOutlined
} from '@ant-design/icons'
import 'antd/dist/antd.css'
import { HashRouter, Route, Link } from 'react-router-dom'
import TodoFormContainer from '../../containers/TodoFormContainer'
import TodoListContainer from '../../containers/TodoListContainer'
import DoneTodoListContainer from '../../containers/DoneTodoListContainer'
import UndoneTodoListContainer from '../../containers/UndoneTodoListContainer'

const { Header, Content, Footer } = Layout

class Main extends React.Component {
  render() {
    const selected = document.URL
    const key = selected.substring(selected.lastIndexOf('/') + 1)
    return (
      <HashRouter>
        <Layout className="layout">
          <Header>
            <Row>
              <Col span={8}>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[key]}>
                  <Menu.Item key="/">
                    <Link replace={true} to="/">All</Link>
                  </Menu.Item>
                  <Menu.Item key="todo">
                    <Link replace={true} to="/todo">Todo</Link>
                  </Menu.Item>
                  <Menu.Item key="done">
                    <Link replace={true} to="/done" icon={<LikeOutlined />}>Done</Link>
                  </Menu.Item>
                </Menu>
              </Col>
              <Col span={8}>
                <h1>Todo List</h1>
              </Col>
            </Row>
          </Header>
          <Content style={{ padding: '0 50px', minHeight: '800px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Todo List</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-content">
              <TodoFormContainer/>
              <Card>
                <Route exact path="/" component={TodoListContainer} />
                <Route exact path="/todo" component={UndoneTodoListContainer} />
                <Route exact path="/done" component={DoneTodoListContainer} />
              </Card>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>COPYRIGHT ©2020 HOVEES</Footer>
        </Layout>
      </HashRouter>
    );
  }
}

export default Main