import React, {useState} from "react";


export default function Login() {
  const [state, setState] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();
    setState(!state)
  };

 if(state===false) return (
    <div className="login-body">
      <form onSubmit={handleSubmit} className="login-form">
        <h1>Sign up</h1>
        <input type="text" placeholder="Nickname*" required></input>
        <br />

        <input type="password" placeholder="Password*" required></input>
        <br />

        <input type="email" placeholder="Email*" required></input>
        <br />

        <input
          type="text"
          placeholder="Name*"
          required
        ></input>
        <br />

        <input
          type="text"
          placeholder="Second name*"
          required
        ></input>
        <br />
     
        <select type="text" id="sex" required>
          <option>Female</option>
          <option>Male</option>
        </select>
        <br />

        <button type="submit">Enter</button>
      </form>
      <span style={{cursor: 'pointer', color: 'blue'}}  onClick={()=>{setState(!state)}}>Already have an account? Log in</span>
    </div>
   
  );
 if(state === true) return(
    <div> 
       <h1>Login</h1>
    <p>Hello There</p>
    <form>
    <input type="password" placeholder="Password*" required></input>
        <br />

        <input type="email" placeholder="Email*" required></input>
        <br />
    <button type="submit">Enter</button>
    </form>
          <span style={{cursor: 'pointer', color: 'blue'}} onClick={()=>{setState(!state)}}>New? Sign Up</span>
          </div>
  )
}
