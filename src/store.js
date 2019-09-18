const defaultState = {
  list: [
    {
      id: 1,
      name: 'urgent & not important',
      todos: [
        {
          id: 1,
          completed: false,
          text: 'Read README'
        },
        {
          id: 2,
          completed: false,
          text: 'Add one todo'
        },
        {
          id: 3,
          completed: false,
          text: 'Add filters'
        },
        {
          id: 4,
          completed: false,
          text: 'Add multiple lists'
        },
        {
          id: 5,
          completed: false,
          text: 'Optional: add tests'
        }
      ]
    },
    {
      id: 2,
      name: 'urgent & important',
      todos: [
        {
          id: 1,
          completed: false,
          text: '* Read README'
        },
        {
          id: 2,
          completed: false,
          text: '* Add one todo'
        },
        {
          id: 3,
          completed: false,
          text: '* Add filters'
        }
      ]
    }
  ]
}

export default defaultState;