import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import Home from './components/Homepage';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';




function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}


serviceWorkerRegistration.register();

export default App;
