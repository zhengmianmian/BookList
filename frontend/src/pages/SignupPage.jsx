import { Link, useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import { useAuth } from "../components/Auth";
import { createAccount } from "../api/api";
function SignupPage(props) {
  const { setToken } = useAuth();
  const navigate = useNavigate();
  function handleSubmit(username, password) {
    createAccount(username, password)
      .then((res) => {
        setToken(res.data.token);
        navigate("/", { replace: true });
      })
      .catch(() => alert("Error when creating account!"));
  }

  return (
    <div >
      <div>
        <div className="m-2 p-2 text-4xl">Sign up</div>
        <LoginForm buttonText="Sign up" onSubmit={handleSubmit} />
        <p>
          Has an account? <Link to="/login" className="underline hover:no-underline hover:cursor-pointer">Go to login</Link>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;