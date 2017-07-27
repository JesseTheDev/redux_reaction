import React from 'react'
import Footer from './Footer'
import Header from './Header'
import SignIn from '../containers/SignIn'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
    <Header />
    <SignIn />
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
