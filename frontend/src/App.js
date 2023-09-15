import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MyRoutes from './routes/routes';

function App() {

  return (
    <BrowserRouter>
      <MyRoutes />
    </BrowserRouter>
  );
}

export default App;
