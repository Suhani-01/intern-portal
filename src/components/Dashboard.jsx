import React from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const navigate=useNavigate();

    function handleClick(){
        navigate('/');
    }
    function openLeaderBoard(){
        navigate('/leaderboard');
    }
  return (
    <div>
      <button onClick={handleClick}>Log Out</button>
      <button onClick={openLeaderBoard}>Leaderboard</button>
    </div>
  )
}

export default Dashboard
