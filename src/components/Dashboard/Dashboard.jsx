import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import { FaTrophy } from "react-icons/fa";
import { MdLogout } from "react-icons/md";

const Dashboard = () => {
  const navigate = useNavigate();
  //data
  const [intern, setIntern] = useState(null);

  //fetching userdata will execute only at first render
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/data.json"); //fetching data from public/data.json
        const data = await res.json(); //converting to js object
        setIntern(data.intern);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  function handleClick() {
    navigate("/");
  }
  function openLeaderBoard() {
    navigate("/leaderboard");
  }
  return (
    <div className="dashboard-box">
      <h1 className="heading">Dashboard</h1>
      <img className="dash-bg" src="/images/dashboard.png" />

      {!intern && <p className="loading">Loading...</p>}

      {intern && (
        <div className="userData">
          <h2>
            Welcome , <span>{intern.name}</span> 👋
          </h2>
          <p>
            <b>Referral Code :</b> {intern.referralCode}
          </p>
          <p>
            <b>Total Donations :</b> ₹{intern.totalDonations}
          </p>

          <h2>
            <span>Rewards</span>
          </h2>
          <ul className="rewards">
            {intern.rewards.map((reward, index) => (
              <li key={index} className="badge-obtained">
                <div className="image-container">
                  <img
                    className={`medal${index}`}
                    src={`/images/medal${index}.png`}
                  />
                </div>
                <div>
                  <p className="medal-name">
                    <b>{reward.title}</b>
                  </p>
                  <p>{reward.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="nav-bar">
        <div className="button-box">
          <FaTrophy
            style={{ fontSize: "24px", color: "grey" }}
            className="btn-icon"
          />
          <button className="open-lead" onClick={openLeaderBoard}>
            Leaderboard
          </button>
        </div>

        <div className="button-box">
          <MdLogout
            style={{ fontSize: "24px", color: "grey" }}
            className="btn-icon"
          />
          <button className="log-out" onClick={handleClick}>
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
