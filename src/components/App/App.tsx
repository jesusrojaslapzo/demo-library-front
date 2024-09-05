import Main from '../pages/Main'
import '@/styles/globa.css'
import { Provider, createStore } from 'jotai';
const myStore = createStore();

function App() {

  return (
    <Provider store={myStore}>
      <Main />
    </Provider>
  )
}

export default App
