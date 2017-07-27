import React from 'react'
import Footer from './Footer'
import Header from './Header'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
    <Header />
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
