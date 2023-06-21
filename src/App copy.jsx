// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import Login from "./Login"
import { ApolloProvider } from '@apollo/client';
import client from './Client';
import TodoList from './TodoList';


const { Header, Content } = Layout;

function App() {
  const isAuthenticated = !!localStorage.getItem('auth-token');

  return (
    <ApolloProvider client={client}>

    <Router>
      <Layout>
        <Header>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Link to="/login">Login</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/todos">Todos</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/todos" element={<TodoList />} />

            <Route path="*" />
          </Routes>
        </Content>
      </Layout>
    </Router>
</ApolloProvider>
  );
}

export default App;
