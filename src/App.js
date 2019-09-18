import React from 'react'
import { Provider, Subscribe } from 'unstated'

import styled from 'styled-components'

import TodosContainer, { VisibilityFilters }   from './containers/todos'
import FilterLink from './components/FilterLink'
import List from './components/List'
import AddList from './components/AddList'


function App () {
  return (
    <Provider>
      <Wrapper>
        <Subscribe to={[TodosContainer]}>
          {todostore => {
            const list = todostore.getList()
            return (
              <TodosWrapper>
                 <FilterLink
                    onFilter={todostore.setFilter}
                    filterType={VisibilityFilters.SHOW_ALL}
                    label="All"
                  ></FilterLink>
                  <FilterLink
                    onFilter={todostore.setFilter}
                    filterType={VisibilityFilters.SHOW_ACTIVE}
                    label="Active"
                  ></FilterLink>
                  <FilterLink
                    onFilter={todostore.setFilter}
                    filterType={VisibilityFilters.SHOW_COMPLETED}
                    label="Completed"
                  ></FilterLink>

                <AddList onAddList={todostore.createList} />
                <List list={list} />
              
              </TodosWrapper>
            )
          }}
        </Subscribe>
      </Wrapper>
    </Provider>
  )
}

const Wrapper = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: white;
`

const TodosWrapper = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
`

export default App