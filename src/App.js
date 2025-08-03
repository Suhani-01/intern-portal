import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Leaderboard from './components/Leaderboard/Leaderboard.jsx';

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
    <div className='main-content'>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
