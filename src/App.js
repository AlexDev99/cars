import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Index from './module/Index';

function App() {
  return (
    <Router>
      <div className='d-flex flex-column css-15lj7bj'>
        <Index />
      </div>
    </Router>
  );
}

export default App;
