import React from 'react'
import { Container, Subscribe } from 'unstated'

import styled from 'styled-components'

import TodoList from './TodoList'
import AddTodo from './AddTodo'

import TodosContainer from '../containers/todos'

class ListItemContainer extends Container {
    constructor(props) {
      super(props)
      this.state = { collapsed: false }
    }
    toggleCollapsed = async () => {
      await this.setState(state => {
        return { collapsed: !state.collapsed }
      })
    }
  }
const ListItem = ({ item }) => (
    <Wrapper>
    <Subscribe to={[TodosContainer, new ListItemContainer()]}>
      {(todostore,listItemState) => {
      
        return (
          <div>
            <Text onClick={listItemState.toggleCollapsed}>{item.name}</Text>
            <AddTodo onAddTodo={todostore.createTodo} id={item.id} />
            {!listItemState.state.collapsed && (
              <TodoList list={item} toggleComplete={todostore.toggleComplete} />
            )}
          </div>
        )
      }}
    </Subscribe>
  </Wrapper>
)

const Wrapper = styled.div`
  font-size: 24px;
  color: yellow;
  cursor: pointer;
`

const Text = styled.span`
  text-decoration: ${props => (props.completed ? 'line-through' : 'none')};
`

export default ListItem