import React from 'react'

import styled from 'styled-components'

import TodoItem from './TodoItem'
import FilterLink from '../components/FilterLink'

import { Subscribe } from 'unstated'
import TodosContainer, { VisibilityFilters } from '../containers/todos'

const TodoList = ({ list, toggleComplete }) => (
  <Wrapper>
  
  <Subscribe to={[TodosContainer]}>
  
    {todosStore => {
     
      let filteredTodos = []
      switch (todosStore.state.filter) {
        case VisibilityFilters.SHOW_ACTIVE:
          filteredTodos = list.todos.filter(todo => todo.completed === false)
          break
        case VisibilityFilters.SHOW_COMPLETED:
          filteredTodos = list.todos.filter(todo => todo.completed === true)
          break
        case VisibilityFilters.SHOW_ALL:
          filteredTodos = list.todos
          break
        default:
        
        filteredTodos = list.todos
      }

      return (
        filteredTodos.map(item => {
        const onComplete = e => {
          toggleComplete(list.id, item.id)
        }
          return <TodoItem key={item.id} {...item} onComplete={onComplete} />
      })
    )
    }}
  </Subscribe>
</Wrapper>
)

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export default TodoList