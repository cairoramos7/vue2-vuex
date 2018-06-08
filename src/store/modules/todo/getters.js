export default {
  allTodos: Todo => {
    return Todo.list
  },
  countTodos: Todo => {
    return `Count Todos: ${Todo.list.length}`
  }
}
