import "./App.css";
import AuthButton from "./components/AuthButton";
import Display from "./components/Display";

function App() {
  console.log("나 App, 렌더링 다시 됨");
  return (
    <>
      <Display />
      <AuthButton />
    </>
  );
}

export default App;
