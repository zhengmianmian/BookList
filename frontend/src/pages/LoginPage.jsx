import { Link, useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import { useAuth } from "../components/Auth";
import { login } from "../api/api";

function LoginPage(props) {
  const { setToken } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(username, password) {
    login(username, password)
      .then((res) => {
        setToken(res.data.token);
        navigate("/books", { replace: true });
      })
      .catch((err) => {
        console.log(err)
      });
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-1/4">
        <div className="m-2 p-2 text-6xl" >Log in</div>
        <LoginForm buttonText="Log in" onSubmit={handleSubmit} />
        <p>
          New to the site? <Link to="/signup" className="underline hover:no-underline hover:cursor-pointer">Create an account!</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;