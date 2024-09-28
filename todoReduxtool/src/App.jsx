import AddTodo from './components/AddTodo3' // Change the filename to match the component

import { store } from './app/Store'
import { Provider } from 'react-redux'
import Todo from './components/Todo'

function App() {
  return (
    <Provider store={store}>
      <h1 className='text-center text-2xl font-medium mt-7'>todo redux toolkit</h1>
      
        <AddTodo />
      <Todo />
     
      
    </Provider>
  )
}

export default App;

