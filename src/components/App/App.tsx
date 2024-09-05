import Main from '../pages/Main'
import '@/styles/globa.css'
import { Provider, createStore } from 'jotai';
const myStore = createStore();
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {

  return (
    <Provider store={myStore}>
      <Main />
      <Analytics />
      <SpeedInsights />
    </Provider>
  )
}

export default App
