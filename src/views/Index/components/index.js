import React from 'react'
import AddTodo from '../containers/AddTodo'

class Index extends React.Component {
    render() {
      return (
        <div>
            <h1>TODO LIST</h1>
            <AddTodo />
        </div>
      )
    }
  }

export default Index