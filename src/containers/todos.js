import defaultState from '../store'
import { Container } from 'unstated';
export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
  }
class TodosContainer extends Container {
    constructor (props) {
      super(props)
  
      this.state = this.readStorage()
    }
  
    readStorage () {
    //   if (window && window.localStorage) {
    //     const state = window.localStorage.getItem('appState')
    //     if (state) {
    //       return JSON.parse(state)
    //     }
    //   }
      
      return defaultState
    }
  
    syncStorage () {
      if (window && window.localStorage) {
        const state = JSON.stringify(this.state)
        window.localStorage.setItem('appState', state)
      }
    }
  
    getTodos (listId) {
        return this.state.lists.find(list => list.id === listId)
      
    }
    getList() {
        
      return this.state.list
    }
  
    toggleComplete = async (groupId,id) => {
      const list = this.state.list.find(g => g.id === groupId)
    const item = list.todos.find(i => i.id === id)
    const completed = !item.completed

    // We're using await on setState here because this comes from unstated package, not React
    // See: https://github.com/jamiebuilds/unstated#introducing-unstated
    await this.setState(state => {
      const list = state.list.map(group => {
        if (group.id !== groupId) return group
        const todos = group.todos.map(todo => {
          if (todo.id !== id) return todo
          return {
            ...todo,
            completed
          }
        })
        return { ...group, todos }
      })
      
      return { ...state, list }
    })
    //  this.syncStorage()
    }
  
    createTodo = async (id,text) => {
      console.log(id);
      await this.setState(state => {
        const currentList = state.list.find(list=> list.id === id)
        const item = {
          completed: false,
          text,
          id: currentList.todos.length + 1
        }
  
        const list = state.list.map(list => {
          if (list.id !== id) return list
          const updatedList = { ...list, todos: list.todos.concat(item) }
          return updatedList
        })
        return { ...state, list }
      })
  
    
     // this.syncStorage()
    }
    createList = async name => {
        await this.setState(state => {
           

          const item = {
            todos: [],
            name,
            id: state.list.length + 1
          }
    
          const list = state.list.concat(item)
        
          return { list }
        })
    
       // this.syncStorage()
      }
    setFilter = async filter => {
        await this.setState({ filter })
      }
  }
  
  export default TodosContainer