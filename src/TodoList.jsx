import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Avatar, List } from 'antd';

const GET_TODOS = gql`
  query FindTodos($limit: Int, $page: Int) {
  todos(limit: $limit, page: $page) {
    data {
      title
      description
      userId
    }
    numItems
    numPages
    page
    pageItems
  }
}
`;

const TodoList = () => {
  const { loading, error, data } = useQuery(GET_TODOS, {
    variables: { limit: 10, page: 1},

  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  // login({ variables: { credentials: { email, password } } });

  return (
  
  <List
    itemLayout="horizontal"
    dataSource={data.todos.data}
    renderItem={(item, index) => (
    <List.Item>
      <List.Item.Meta
        avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
        title={<a href="https://ant.design">{item.title}</a>}
        description={item.description}
      />
  </List.Item>
  )}
  />
  );
};

export default TodoList;
