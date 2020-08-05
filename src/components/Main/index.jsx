import React from 'react'
import { Layout, Menu, Breadcrumb, Card } from 'antd'
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
    return (
      <HashRouter>
        <Layout className="layout">
          <Header>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <Link replace={true} to="/">Todo</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link replace={true} to="/undone-todolist">Undo</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link replace={true} to="/done-todolist" icon={<LikeOutlined />}>Done</Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px', minHeight: '800px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Todo List</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-content">
              <TodoFormContainer/>
              <Card>
                <Route exact path="/" component={TodoListContainer} />
                <Route exact path="/undone-todolist" component={UndoneTodoListContainer} />
                <Route exact path="/done-todolist" component={DoneTodoListContainer} />
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