import HelloWorld from '@/components/HelloWorld'

import Todo from '@/components/Todo/Index'

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/todo',
    name: 'TodoList',
    component: Todo
  }
]

export default routes
