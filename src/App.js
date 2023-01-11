import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import "./styles.scss"
function App() {
  return (
    <div className="App">
      <Header/>
      <Outlet/>
    </div>
  );
}

export default App;
