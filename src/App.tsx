import React from 'react';
import UserList from './components/UserList';
import './App.scss';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
        <TodoList/>
        <UserList />
        
    </div>
  );
}

export default App;
