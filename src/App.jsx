// import { FileOutlined, PieChartOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import React, { useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from "./Login"
import { ApolloProvider } from '@apollo/client';
import client from './Client';
import TodoList from './TodoList';



const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
// const items = [
//   getItem('login', '1', <PieChartOutlined />),
//   getItem('todos', '2', <FileOutlined />),
//   getItem('User', 'sub1', <FileOutlined />, [
//     getItem('Tom', '3'),
//     getItem('Bill', '4'),
//     getItem('Alex', '5'),
//   ]),

// ];

const items = [
  {
    label: (<a href="/login" rel="noopener noreferrer">
    Login
  </a>),
    key: 'mail',
    icon: <DesktopOutlined />,
  },
  {
    label: (<a href="/todos" rel="noopener noreferrer">
    Todos
  </a>),
    key: 'todo',
    icon: <DesktopOutlined />,
  },
]
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (

        <ApolloProvider client={client}>
 <Router>
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/todos" element={<TodoList />} />

            <Route path="*" />
          </Routes>


        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
    </Router>
        </ApolloProvider>

  );
};
export default App;