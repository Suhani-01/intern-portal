import { useNavigate } from "react-router-dom";
import "./Login.css";
import { FiUser,FiLock } from 'react-icons/fi';


const Login = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/dashboard");
  }

  return (
    <div className="login-box">
      <div className="login-image">
        <img className="image-content" src="/images/login.png" />
      </div>
      <div className="login-data">
        <h1>Intern Login</h1>
        <p>Hey ! Enter your details to sign in to your account</p>

        <form className="login-form">
            <div className="input-box">
                <FiUser style={{ fontSize: '20px', color: '#555' }} className="icon"  />
                <input placeholder="Enter your username/email" type="text" className="input-field" />
            </div>
            
            <div className="input-box">
                <FiLock style={{ fontSize: '20px', color: '#555' }} className="icon" />
                <input placeholder="Enter your password" type="password" className="input-field"/>
            </div>
            <button className="login-button" onClick={handleClick} type="submit">Log In</button>
        </form>
        
      </div>
    </div>
  );
};

export default Login;
