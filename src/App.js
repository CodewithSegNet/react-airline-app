import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
  <>
  <Routes>
    <Route path='/' element={ <Layout /> } />
  </Routes>
  </>
  );
}

export default App;
