import Main from '../pages/Main'
import '@/styles/globa.css'
import { Provider, createStore } from 'jotai';
const myStore = createStore();
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {

  return (
    <Provider store={myStore}>
      <Router>
        <Main />
        <Analytics />
        <SpeedInsights />
      </Router>
    </Provider>
  )
}

export default App
