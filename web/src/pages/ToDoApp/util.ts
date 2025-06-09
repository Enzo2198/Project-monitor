export interface Todo {
  id: number,
  name: string,
  status: string
}

export interface State {
  todos: Todo[]
  job: string
  selectedTodo: Todo | null
}


const getNewId = (ids: number[]): number => {
  return Math.max(...ids) + 1
}

const onInputJob = (state: State, value: string): State => {
  return {...state, job: value}
}

const updateTodos = (state: State) => {
  const index = state.todos.findIndex((todo: Todo) => todo.id === state.selectedTodo?.id)
  const newTodos: Todo[] = state.todos
  // @ts-ignore
  newTodos[index] = state.selectedTodo
  newTodos[index].name = state.job
  return {
    ...state,
    todos: newTodos,
    job: '',
    selectedTodo: null
  }
}


const addNewTodos = (state: State): State => {
  const newJob = {
    id: getNewId(state.todos.map(todo => todo.id)),
    name: state.job,
    status: 'pending'
  }
  return {...state, job: '', todos: [...state.todos, newJob]}
}

const selectedTodoUpdate = (state: State, value: Todo) => {
  return {...state, selectedTodo: value}
}

const actionHandler: any = {
  jobUpdate: onInputJob,
  addNewTodos: addNewTodos,
  updateTodos: updateTodos,
  selectedTodoUpdate: selectedTodoUpdate
}


export const reducer = (state: State, action: any): State => {
  return actionHandler[action.type](state, action.value)
}