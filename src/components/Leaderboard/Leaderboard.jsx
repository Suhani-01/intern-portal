import React, { useEffect, useState } from "react";
import "./Leaderboard.css";
import Dashboard from "../Dashboard/Dashboard";
import { useNavigate } from "react-router-dom";

const Leaderboard = () => {
  const [leadboard,setLeadboard]=useState(null);
  const navigate=useNavigate();
  
  //to go to prev page
  function goBack(){
    navigate(-1);
  }


  //fetching leadboard data will execute only at first render
    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch("/data.json"); //fetching data from public/data.json
          const data = await res.json(); //converting to js object
          setLeadboard(data.leaderboard);
        } catch (err) {
          console.log(err);
        }
      };
      fetchData();
    }, []);
 


  return (
    <div className='leaderboard-box'>
        <h1>Leaderboard</h1>
        <img src="/images/trophy.png"/>
        {!leadboard && <p className="loading">Loading...</p>}

        {
          leadboard &&
          <div className="leadboard-data-box">
          <div className="leadboard-data">
            {
              leadboard.map((lead,index)=>(
                <div key={index} className="lead-row">
                  <span>{lead.name}</span>
                  <span><b className="don-text">Total donation :</b> ₹{lead.donations}</span>
                </div>
              ))
            }
            </div>
        </div>

        }
        

        <button onClick={goBack}>&lt; Dashboard</button>
    </div>
    
  )
}

export default Leaderboard
