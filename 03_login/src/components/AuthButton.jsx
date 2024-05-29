import { useDispatch, useSelector } from "react-redux";
import { logIn, logOut } from "../redux/reducers/auth.reducer";

function AuthButton() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleClickButton = () => {
    const action = isLoggedIn ? logOut() : logIn();
    dispatch(action);
  };

  return (
    <button onClick={handleClickButton}>
      {isLoggedIn ? "로그아웃하기" : "로그인하기"}
    </button>
  );
}

export default AuthButton;
