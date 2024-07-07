import { useState } from "react";

function LoginForm(props) {
  const { buttonText, onSubmit } = props;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(username, password);
  }
  const inputStyle = "my-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"

  return (
    <form onSubmit={handleSubmit}>
      <div>
        
        <input 
          className={inputStyle}
          type="text"
          id="txtUsername"
          name="username"
          placeholder="email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        
        <input 
          className={inputStyle}
          type="password"
          id="txtPassword"
          placeholder="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button type="submit">{buttonText || "Submit"}</button>
      </div>
    </form>
  );
}

export default LoginForm;