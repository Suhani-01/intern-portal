import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Leaderboard from './components/Leaderboard';

const router=createBrowserRouter([
  {
    path:'/',
    element:<Login/>
  },
  {
    path:'/dashboard',
    element:<Dashboard/>
  },
  {
    path:'/leaderboard',
    element:<Leaderboard/>
  }
])
function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
