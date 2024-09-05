import Main from '../pages/Main'
import '@/styles/globa.css'
import { Provider, createStore } from 'jotai';
const myStore = createStore();
import { Analytics } from '@vercel/analytics/react';

function App() {

  return (
    <Provider store={myStore}>
      <Main />
      <Analytics />
    </Provider>
  )
}

export default App
