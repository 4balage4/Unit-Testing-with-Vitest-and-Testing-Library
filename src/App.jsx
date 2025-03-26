import "./App.css";
import Greeting from "./components/Greeting";
import Counter from "./components/Counter";
import Form from "./components/Form";
import RenderAPI from "./components/RenderAPI";
import UserProfile from "./components/UserProfile";
import FetchPost from "./components/FetchPost";

function App() {
  return (
    <>
      <Greeting />
      <Counter />
      <Form />
      <RenderAPI />
      <UserProfile id="5" />
      <FetchPost />
    </>
  );
}

export default App;
